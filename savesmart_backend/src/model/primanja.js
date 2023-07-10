const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PrimanjaSchema = new Schema({
  izvor: {
    type: String,
    required: true,
  },
  iznosIzv: {
    type: double,
    required: true,
  },
  stednja: {},
});
module.exports = User = mongoose.model("primanja", UserSchema);
