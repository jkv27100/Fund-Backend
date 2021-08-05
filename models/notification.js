const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notiDetails = new Schema({
  message: {
    type: String,
    required: true,
  },
});

const Notification = mongoose.model("Notification", notiDetails);
module.exports = Notification;
