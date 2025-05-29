// utils/receiptValidator.js
const RNTesseractOcr = require("react-native-tesseract-ocr");

const isReceipt = async (photo) => {
  try {
    const result = await RNTesseractOcr.recognize(photo.uri, "eng", {
      whitelist: null,
      blacklist: null,
    });

    const text = result; // The result from RNTesseractOcr is already the text
    console.log("this are the texts", text)
    // Check for common keywords in receipts
    const receiptKeywords = ["total", "subtotal", "thank you", "receipt"];

    return receiptKeywords.some((keyword) =>
      text.toLowerCase().includes(keyword)
    );
  } catch (error) {
    console.error("Error during receipt validation:", error);
    return false; // Return false on error
  }
};

module.exports = {
  isReceipt,
};
