const mongoose = require('mongoose');
const userScheme = require('../schemes/User');

const User = mongoose.model("User", userScheme);

module.exports = User;