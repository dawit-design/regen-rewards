const appError = require('../utils/appError');

const protected = (req, res, next) => {
    // Check if the user is logged in
    if (req.session.userAuth) {
        return next(); // Proceed to the next middleware
    } else {
        return next(appError('Not Authorized, login again')); // Pass error to next
    }
};

module.exports = protected;
