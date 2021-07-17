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

  isKickStarter: {
    type: Boolean,
    default: false,
  },
  isCharity: {
    type: Boolean,
    default: false,
  },
  isBothRole: {
    type: Boolean,
    default: false,
  },
  accountNo: {
    type: String,
    default: null,
  },
  bookmarked: [Object],
  transactions: [String],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
