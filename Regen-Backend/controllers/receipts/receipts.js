const fs = require("fs");
const cloudinary = require("../../config/cloudinary");
const Receipt = require("../../models/receipt");
const Tesseract = require("tesseract.js");
const sharp = require("sharp");
const referenceGuide = require("../../data/referenceGuide");
const User = require("../../models/user/User");

// Recognize Products Function
const recognizeProducts = (text) => {
  const foundItems = [];
  const productMatches = new Set();

  console.log("Text for recognition:", text);

  referenceGuide.forEach((farm) => {
    farm.products.forEach((product) => {
      product.keywords.forEach((keyword) => {
        // Create a more flexible regex pattern
        const pattern = new RegExp(
          `\\b(${keyword})\\b\\s*\\$?([0-9]+(?:\\.[0-9]{2})?)`,
          "gi"
        );

        let match;
        while ((match = pattern.exec(text)) !== null) {
          const productName = match[1].trim();
          const productPrice = parseFloat(match[2]);

          console.log("Matched Product:", productName, "Price:", productPrice);

          const productKey = `${productName}-${productPrice}`;
          if (!productMatches.has(productKey)) {
            productMatches.add(productKey);
            foundItems.push({
              farm: farm.farm,
              product: productName,
              price: productPrice,
              website: farm.website,
              isRegenerative: product.isRegenerative,
            });
            console.log("Found item:", {
              farm: farm.farm,
              product: productName,
              price: productPrice,
            });
          }
        }

        // Log keyword check
        console.log("Checking for keyword:", keyword);
      });
    });
  });

  console.log("All recognized products:", foundItems);
  return foundItems;
};

// Upload image to Cloudinary and perform OCR
const uploadReceipt = async (req, res) => {
  try {
    const filePath = req.file.path;

    if (!fs.existsSync(filePath)) {
      return res.status(400).json({ message: "Uploaded file not found." });
    }

    const receiptData = await performOCR(filePath);
    const recognizedProducts = recognizeProducts(receiptData.text);

    let totalAmount = 0;

    for (const product of recognizedProducts) {
      if (product.price && !isNaN(product.price)) {
        totalAmount += product.price;
      }
    }

    const rewardPoints = parseFloat((totalAmount * 0.05).toFixed(2));
    console.log("Total Amount from Recognized Products:", totalAmount);
    console.log("Calculated Reward Points:", rewardPoints);

    const newReceipt = new Receipt({
      name: `Receipt from ${receiptData.storeName}`,
      userId: req.user.id,
      storeName: receiptData.storeName,
      totalAmount: totalAmount,
      date: receiptData.date,
      imageUrl: filePath,
      processed: true,
      recognizedProducts: recognizedProducts,
      rewardPoints: rewardPoints,
      totalRewardPoints: 0,
    });

    await newReceipt.save();

    const user = await User.findById(req.user.id);
    if (!user) {
      console.error("User not found for ID:", req.user.id);
      return res.status(404).json({ message: "User not found." });
    }

    user.totalRewardPoints = parseFloat((user.totalRewardPoints).toFixed(2)) || 0;

    console.log("Current Total Reward Points:", user.totalRewardPoints);

    user.totalRewardPoints += rewardPoints;
    console.log("User Total Reward Points Before Update:", user.totalRewardPoints);

    await user.save();

    newReceipt.totalRewardPoints = user.totalRewardPoints;
    await newReceipt.save();

    res.status(201).json({
      message: "Receipt processed successfully!",
      data: {
        newReceipt,
        recognizedProducts,
        rewardPoints,
        totalRewardPoints: user.totalRewardPoints,
      },
    });

    fs.unlinkSync(filePath);
  } catch (error) {
    console.error("Error in uploadReceipt:", error);
    res.status(500).json({
      message: "Failed to upload and process receipt",
      error: error.message,
    });
  }
};

// OCR Processing Function (Tesseract.js)
const performOCR = async (filePath) => {
  try {
    const processedImagePath = "uploads/processed-" + Date.now() + ".png";
    await sharp(filePath)
      .resize(800)
      .toFormat("png")
      .toFile(processedImagePath);

    const result = await Tesseract.recognize(processedImagePath, "eng");
    const text = result.data.text;

    fs.unlinkSync(processedImagePath);
    console.log("OCR Output:", text);

    const storeName = extractStoreName(text);
    const totalAmount = extractTotalAmount(text);
    const date = extractDate(text);

    return {
      storeName,
      totalAmount,
      date,
      text,
    };
  } catch (error) {
    console.error("Error during OCR processing:", error);
    throw new Error("OCR processing failed");
  }
};

// Example extraction functions
const extractStoreName = (text) => {
  const match = text.match(/(?:Store:|Store Name:)\s*(.*)/i);
  return match ? match[1].trim() : "Unknown Store";
};

const extractTotalAmount = (text) => {
  const match = text.match(/(?:Total:|Amount:|Price:)\s*\$?(\d+\.\d{2})/);
  return match ? parseFloat(match[1]) : 0.0;
};

const extractDate = (text) => {
  const match = text.match(/(?:Date:|Purchase Date:)\s*(.*)/i);
  return match ? new Date(match[1].trim()) : new Date();
};

// Get all receipts for a user
const getReceipts = async (req, res) => {
  console.log("User object:", req.user);

  const { page = 1, limit = 10 } = req.query;

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    const receipts = await Receipt.find({ userId: req.user.id })
      .select(
        "name totalAmount date rewardPoints recognizedProducts processed imageUrl"
      )
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalReceipts = await Receipt.countDocuments({ userId: req.user.id });
    res.status(200).json({
      success: true,
      data: receipts,
      currentPage: page,
      totalPages: Math.ceil(totalReceipts / limit),
      totalReceipts,
    });
  } catch (error) {
    console.error("Error fetching receipts:", error);
    res.status(500).json({ message: "Failed to retrieve receipts", error: error.message });
  }
};


// Update a receipt by ID
const updateReceipt = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedReceipt = await Receipt.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedReceipt) {
      return res.status(404).json({ message: "Receipt not found" });
    }
    res.status(200).json({ success: true, data: updatedReceipt });
  } catch (error) {
    console.error("Error updating receipt:", error);
    res.status(500).json({ message: "Failed to update receipt", error: error.message });
  }
};

// Delete a receipt by ID
const deleteReceipt = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReceipt = await Receipt.findByIdAndDelete(id);
    if (!deletedReceipt) {
      return res.status(404).json({ message: "Receipt not found" });
    }
    res.status(200).json({ success: true, message: "Receipt deleted successfully" });
  } catch (error) {
    console.error("Error deleting receipt:", error);
    res.status(500).json({ message: "Failed to delete receipt", error: error.message });
  }
};

// Product Matching Logic
const matchProducts = (req, res) => {
  const { recognizedProducts } = req.body;
  const matchedProducts = [];

  recognizedProducts.forEach((recognized) => {
    referenceGuide.forEach((farm) => {
      farm.products.forEach((product) => {
        if (recognized.toLowerCase() === product.name.toLowerCase()) {
          matchedProducts.push({
            farm: farm.farm,
            product: product.name,
            website: farm.website,
          });
        }
        product.keywords.forEach((keyword) => {
          if (recognized.toLowerCase().includes(keyword.toLowerCase())) {
            matchedProducts.push({
              farm: farm.farm,
              product: product.name,
              website: farm.website,
            });
          }
        });
      });
    });
  });

  res.json({ success: true, data: { matchedProducts } });
};

module.exports = {
  uploadReceipt,
  getReceipts,
  updateReceipt,
  deleteReceipt,
  matchProducts,
};
