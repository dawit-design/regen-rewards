const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Receipt name (or store name)
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model
  storeName: { type: String },
  totalAmount: { type: Number },
  date: { type: Date },
  imageUrl: { type: String },
  totalRewardPoints: {
    type: Number,
    default: 0, // Set default to 0 so new users start with no points
  },
  processed: { type: Boolean, default: false },
  recognizedProducts: [{ farm: String, product: String, website: String }],
  rewardPoints: { type: Number, default: 0 },
});

const Receipt = mongoose.model("Receipt", receiptSchema);
module.exports = Receipt;
