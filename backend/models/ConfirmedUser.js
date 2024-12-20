// Email confirmation route
router.get('/confirm-email', async (req, res) => {
    const { token } = req.query; // Extract token from query parameters
  
    try {
      // Find the user with the provided token
      const user = await User.findOne({ confirmationToken: token });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired confirmation token' });
      }
  
      // Update user's confirmation status and clear the token
      user.isEmailConfirmed = true;
      user.confirmationToken = null;
      await user.save();
  
      res.status(200).json({ message: 'Email confirmed successfully. You can now log in.' });
    } catch (error) {
      console.error('Error during email confirmation:', error);
      res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
  });
  