const isAuthenticated = (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    next();
  };
  
  const isAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access denied. Admins only' });
    }
    next();
  };

  const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from header

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user; // Set req.user with the decoded token payload
        next();
    });
};

  module.exports = { isAuthenticated, isAdmin, authenticateJWT };
  