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
  phone: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  donated: {
    type: Number,
    default: 0,
  },
  post_no: {
    type: Number,
    default: 0,
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
  posts: [String],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
