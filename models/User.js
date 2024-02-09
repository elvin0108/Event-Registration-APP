const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  mobile: String,
  category: String,
  village: String
});

const User = mongoose.model('visitors', userSchema);

module.exports = User;
