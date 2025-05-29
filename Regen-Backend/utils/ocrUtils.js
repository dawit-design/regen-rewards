const fs = require("fs");
const Tesseract = require("tesseract.js");
const sharp = require("sharp");
const referenceGuide = require("../data/referenceGuide");

const recognizeProducts = (text) => {
  const foundItems = [];
  referenceGuide.forEach((farm) => {
    farm.products.forEach((product) => {
      product.keywords.forEach((keyword) => {
        if (text.toLowerCase().includes(keyword.toLowerCase())) {
          foundItems.push({
            farm: farm.farm,
            product: product.name,
            website: farm.website,
          });
        }
      });
    });
  });
  return foundItems;
};

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
    throw new Error("OCR processing failed");
  }
};

// Example implementations of the extraction functions
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

module.exports = { performOCR, recognizeProducts, extractStoreName, extractTotalAmount, extractDate };
