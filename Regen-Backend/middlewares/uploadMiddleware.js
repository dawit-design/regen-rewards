const multer = require("multer");
const path = require("path");

// Multer setup for local file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      return cb(
        new Error("Only .jpg, .jpeg, or .png files are allowed!"),
        false
      );
    }
    cb(null, true);
  },
});

module.exports = upload;
