const crypto = require('crypto');

// Generate a random secret key
const secret = crypto.randomBytes(64).toString('hex');
console.log('Generated Session Secret:', secret);
