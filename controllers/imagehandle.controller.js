const Profile = require("../models/userProfile");
const log = require("debug")("app:dev");

const uploadImage = async (req, res) => {
  const user_id = req.body.user_id;
  let profile_img = req.file.buffer;
  const result = await Profile.findOneAndUpdate({ user_id }, { profile_img });

  if (result)
    return res.status(200).send({ success: true, message: "Profile Updated" });

  const data = {
    user_id,
    profile_img,
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
