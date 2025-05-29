const User = require('../../models/user/User'); // Assuming the User model contains points info
const Transaction = require('../../models/Transaction'); // Import the Transaction model

// Cash in Points Controller
const cashInPoints = async (req, res) => {
  const { pointsToCashIn } = req.body; // Points the user wants to cash in
  const userId = req.user.id; // Assuming you're using some form of user authentication

  // Input validation
  if (!pointsToCashIn || typeof pointsToCashIn !== 'number' || pointsToCashIn <= 0) {
    return res.status(400).json({ message: 'Invalid points to cash in' });
  }

  try {
    // Fetch the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if user has enough points
    if (user.totalRewardPoints < pointsToCashIn) {
      return res.status(400).json({ message: 'Insufficient reward points' });
    }

    // Deduct points
    user.totalRewardPoints -= pointsToCashIn;
    await user.save(); // Save the updated user points

    // Handle the cash equivalent transfer to bank account
    const cashEquivalent = pointsToCashIn / 100; // Assuming 100 points = $1
    const transferResult = await transferToBankAccount(user, cashEquivalent);

    if (!transferResult.success) {
      return res.status(500).json({ message: 'Transfer to bank account failed', error: transferResult.error });
    }

    // Log the transaction
    const newTransaction = await Transaction.create({
      userId: user._id,
      amount: cashEquivalent,
      pointsCashedIn: pointsToCashIn,
      type: 'cash_in',
      status: 'completed',
    });

    // Respond with success
    res.status(200).json({
      message: `Successfully cashed in ${pointsToCashIn} points for $${cashEquivalent}`,
      remainingPoints: user.totalRewardPoints,
      transactionId: newTransaction._id, // Optionally include the transaction ID in the response
    });
  } catch (error) {
    console.error('Error in cashing in points:', error);
    res.status(500).json({ message: 'Failed to cash in points', error: error.message });
  }
};

// Fetch Transaction History Controller
const getTransactionHistory = async (req, res) => {
  const userId = req.user.id; 
  console.log("Authenticated User ID for Transaction History:", userId);

  // Pagination setup
  const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    const transactions = await Transaction.find({ userId })
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalTransactions = await Transaction.countDocuments({ userId });

    res.status(200).json({
      success: true,
      transactions,
      currentPage: page,
      totalPages: Math.ceil(totalTransactions / limit),
      totalTransactions,
    });
  } catch (error) {
    console.error('Error fetching transaction history:', error);
    res.status(500).json({ message: 'Failed to fetch transaction history' });
  }
};


// Example function to transfer to bank account
const transferToBankAccount = async (user, amount) => {
  try {
    // Placeholder logic for transferring money
    console.log(`Transferring $${amount} to ${user.name}'s bank account`);

    // Simulate successful transfer
    return { success: true };
  } catch (error) {
    console.error('Error transferring to bank account:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { cashInPoints, getTransactionHistory };
