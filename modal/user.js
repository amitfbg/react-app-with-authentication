/**
 * Description: Here we created the User Schema which is the blueprint of out User data
 */

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, min: 6, required: true },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: { type: String, min: 6, required: true },
});

module.exports = mongoose.model("User", UserSchema);
