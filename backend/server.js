const express = require("express");
const cors = require("cors");
const connectDB = require("./db"); // Import your MongoDB connection logic
const authRoutes = require("./routes/auth"); // Import auth routes

const app = express();

// Middleware
app.use(express.json()); // Ensure this middleware is present
app.use(cors({ origin: "http://localhost:3000" })); // Allow requests from the React frontend

// Connect to MongoDB
connectDB(); // This connects to MongoDB

// Register the auth routes
app.use("/api/auth", authRoutes); // API routes prefixed with /api/auth

// Start the server
const PORT = process.env.PORT || 5000;  // Use the port from .env, default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});