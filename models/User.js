const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  mobile: String,
  category: String,
  village: String,
  std: String,
  school: String
});

const User = mongoose.model('visitors', userSchema);

module.exports = User;
