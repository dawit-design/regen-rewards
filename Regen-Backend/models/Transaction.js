// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  pointsCashedIn: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['cash_in'], required: true },
  status: { type: String, default: 'completed' },
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
