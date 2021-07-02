const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var imageSchema = new Schema({
  user_id: String,
  profile_img: Buffer,
});

const Profile = new mongoose.model("Image", imageSchema);

module.exports = Profile;
