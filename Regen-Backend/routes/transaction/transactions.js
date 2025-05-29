const express = require('express');
const router = express.Router();
const { cashInPoints, getTransactionHistory } = require('../../controllers/transactions/transactions');
const { authenticateJWT, isAuthenticated } = require("../../middlewares/auth");// Assuming you have authentication middleware

// Route to handle cashing in points
router.post('/cash-in-points', authenticateJWT, cashInPoints);

// Route to transaction history
router.get('/transaction-history', authenticateJWT, getTransactionHistory);

module.exports = router;
