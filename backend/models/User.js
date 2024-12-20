const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmationToken: { type: String }, 
  isEmailConfirmed: { type: Boolean, default: false }, 
  role: { type: String,  enum: ['user', 'admin'], default: 'user',},
});

// Hash password before saving the user
// userSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     // Only hash the password if it's new or modified
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

// Ensure that the confirmation token has an expiration time (e.g., 1 hour)
userSchema.methods.setConfirmationToken = function() {
  const token = crypto.randomBytes(32).toString('hex');
  const expiration = Date.now() + 3600000; // Token expires in 1 hour
  this.confirmationToken = token;
  this.confirmationTokenExpiry = expiration;
};

module.exports = mongoose.model('User', userSchema);
