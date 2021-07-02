const Profile = require("../models/userProfile");
const log = require("debug")("app:dev");

const uploadImage = async (req, res) => {
  const data = {
    user_id: req.body.user_id,
    profile_img: req.file.buffer,
  };
  const userProfile = await Profile.create(data);
  res.status(200).send({ success: true, message: "Profile Photo uploaded!" });
};

const getImage = async (req, res) => {
  const { user_id } = req.body;
  const result = await Profile.findOne({ user_id });
  if (!result)
    return res.status(400).send({ success: false, message: "Image Not Found" });

  const imagebase64 = result.profile_img.toString("base64");

  res.status(200).send({
    success: true,
    message: "Image Found",
    result: imagebase64,
  });
};

module.exports = { uploadImage, getImage };
