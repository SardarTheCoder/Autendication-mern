const mongoose = require("mongoose");

const DB_URI = "mongodb://localhost:27017/auth-demo"; // MongoDB Compass connection string

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI); // No need for useNewUrlParser and useUnifiedTopology
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process with failure in case of connection error
  }
};

module.exports = connectDB;
