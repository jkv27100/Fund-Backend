const Profile = require("../models/userProfile");
const log = require("debug")("app:dev");
const sharp = require("sharp");

const uploadImage = async (req, res) => {
  const user_id = req.body.user_id;
  let profile_img = req.file.buffer;
  let img = profile_img.toString("base64");
  const result = await Profile.findOneAndUpdate(
    { user_id },
    { profile_img: img }
  );

  let compressed = await sharp(profile_img).resize(200).toBuffer();
  compressed = compressed.toString("base64");

  if (result)
    return res.status(200).send({ success: true, message: "Profile Updated" });

  const data = {
    user_id,
    profile_img: compressed,
  };
  const userProfile = await Profile.create(data);
  res.status(200).send({ success: true, message: "Profile Photo uploaded!" });
};

const getImage = async (req, res) => {
  const { user_id } = req.body;
  const result = await Profile.findOne({ user_id });
  if (!result)
    return res.status(400).send({ success: false, message: "Image Not Found" });

  const imagebase64 = result.profile_img;

  res.status(200).send({
    success: true,
    message: "Image Found",
    result: imagebase64,
  });
};

module.exports = { uploadImage, getImage };
