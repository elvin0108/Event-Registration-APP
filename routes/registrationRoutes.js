const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Registration form route
router.get('/', (req, res) => {
  res.render('register');
});

// Handle registration form submission
router.post('/', (req, res) => {
  const { username, mobile, category, village, std, school} = req.body;
  console.log("Visitor data received", {date: new Date(), username, mobile, category, village, std, school});

  // Save user to MongoDB
  const newUser = new User({ username, mobile, category, village, std, school});
  newUser.save()
    .then(() => {
      console.log("Data stored in db");  
      res.render('register', { successMessage: 'Registration successful!', mobile: mobile, name: username});
    })
    .catch((err) => {
      console.error(err);
      res.render('register', { errorMessage: 'Error registering user.' });
    });
});

module.exports = router;
