const express = require('express');
const User = require('../models/users'); // Ensure this path is correct for the Mongoose model
const router = express.Router();

// Route to add a new user
router.post('/add', async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = new User({ username, email });
    await newUser.save(); // Mongoose method to save the document
    res.json(newUser);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).send(error.message);
  }
});

// Route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Mongoose method to find all documents
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).send(error.message);
  }
});

module.exports = router;



