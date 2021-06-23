const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
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
  profile_img: {
    type: String,
    default: null,
  },
  phone_no: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  donated: {
    type: Number,
    required: true,
  },
  isApplied: {
    type: Boolean,
    default: false,
  },
  isPoster: {
    type: Boolean,
    default: false,
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  likedPosts: [String],
  bookmarked: [String],
  transactions: [String],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
