const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  avatar: {
    type: String,
    required: false,
  },
  friends: {
    type: Array,
    required: false,
  },
});
module.exports = User = mongoose.model("users", UserSchema);
