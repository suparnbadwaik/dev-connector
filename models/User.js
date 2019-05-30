const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // the below is basically this structure
  //   name: {},
  //   email: {},
  //   password: {},
  //   avatar: {}

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("user", UserSchema);
