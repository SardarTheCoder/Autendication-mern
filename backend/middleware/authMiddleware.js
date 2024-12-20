const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to protect the admin route
const protectAdminRoute = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer token format
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed. No token provided.' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);

    // Check if the user exists and has the admin role
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Access forbidden: You do not have the correct role.' });
    }

    // Attach user to request object for use in the route handler
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ message: 'Something went wrong with authentication.' });
  }
};

module.exports = protectAdminRoute;