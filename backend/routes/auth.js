const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file
const protectAdminRoute = require('../middleware/authMiddleware'); // Import the middleware

const { EMAIL_USER, EMAIL_PASS, CLIENT_URL, JWT_SECRET } = process.env;

const User = require('../models/User');

const router = express.Router();

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Register route to save user data
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const confirmationToken = crypto.randomBytes(32).toString('hex');

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      confirmationToken,
      isEmailConfirmed: false,
    });

    await newUser.save();

    const confirmationLink = `${CLIENT_URL}/login?token=${confirmationToken}`;
    await transporter.sendMail({
      from: EMAIL_USER,
      to: email,
      subject: 'Confirm Your Email',
      html: `<p>Hi ${name},</p>
             <p>Click the link below to confirm your email address:</p>
             <a href="${confirmationLink}">Confirm Email</a>`,
    });

    res.status(200).json({ message: 'User registered successfully. Please check your email to confirm your account.' });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// Email confirmation route
router.get('/confirm-email', async (req, res) => {
  const { token } = req.query;

  try {
    const user = await User.findOne({ confirmationToken: token });
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    user.isEmailConfirmed = true;
    user.confirmationToken = undefined; // Clear the token
    await user.save();

    res.status(200).json({ message: 'Email confirmed successfully. You can now log in.' });
  } catch (error) {
    console.error('Error during email confirmation:', error.message);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch');
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    if (!user.isEmailConfirmed) {
      console.log('Email not confirmed');
      return res.status(400).json({ message: 'Please confirm your email address' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '24h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// Role route
// Role route
router.get('/role', async (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer token format
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed. No token provided.' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Respond with the user's role
    res.status(200).json({ role: user.role });
  } catch (error) {
    console.error('Error fetching user role:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Admin protected route
router.get('/admin-dashboard', protectAdminRoute, (req, res) => {
  res.status(200).json({ message: 'Welcome to the Admin Dashboard', user: req.user });
});




module.exports = router;