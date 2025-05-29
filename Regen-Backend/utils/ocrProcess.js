const Tesseract = require('tesseract.js');

const ocrProcess = (fileBuffer) => {
    console.log("File Buffer:", fileBuffer)
    return Tesseract.recognize(fileBuffer, 'eng')
        .then(result => result.data.text) // Extract text from the result
        .catch(err => {
            console.error('Error in OCR:', err);
            throw new Error('OCR processing failed');
        });
};

module.exports = ocrProcess;
