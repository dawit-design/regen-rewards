const express = require("express");
const router = express.Router();
const {
  uploadReceipt,
  getReceipts,
  updateReceipt,
  deleteReceipt,
  matchProducts,
} = require("../../controllers/receipts/receipts");
const { upload } = require("../../middlewares/upload");
const { authenticateJWT, isAuthenticated } = require("../../middlewares/auth");

// Protect the routes with authentication
router.post(
  "/upload",
  authenticateJWT,
  isAuthenticated,
  upload.single("receipt"),
  uploadReceipt
);
router.post("/match-products", authenticateJWT, isAuthenticated, matchProducts);
router.post("/upload", uploadReceipt);
router.get("/receipts", authenticateJWT, isAuthenticated,getReceipts); // To get all receipts for a user
router.put("/receipts/:id", updateReceipt); // To update a receipt by ID
router.delete("/receipts/:id", deleteReceipt); // To delete a receipt by ID
router.post("/match-products", matchProducts); // Assuming this is for matching products
module.exports = router;
