const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  avatar: { type: String },
});

const users = mongoose.model("user", userSchema);

module.exports = users;
