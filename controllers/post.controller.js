const Post = require("../models/post");
const User = require("../models/user");
const log = require("debug")("app:dev");
const sharp = require("sharp");

const getPostByUserId = async (req, res) => {
  const { user_id } = req.body;
  const postData = await Post.find({ user_id });

  res.status(200).send({ success: true, message: "Found posts", postData });
};

const getApprovedPosts = async (req, res) => {
  const posts = await Post.find({ isApproved: true });
  res.status(200).send({ success: true, message: "Posts found", posts });
};

const addPost = async (req, res) => {
  const files = req.files.map((e) => e.buffer);
  const resizedImage = [];

  const compressImage = async (image) => {
    const img = await sharp(image).resize(200).toBuffer();
    return img;
  };

  for (let i = 0; i < files.length; i++) {
    let compressed = await compressImage(files[i]);
    resizedImage.push(compressed);
  }

  let images = resizedImage.map((e) => e.toString("base64"));
  const newPost = {
    images,
    ...req.body,
  };

  const { user_id } = req.body;

  const user = await User.findOne({ _id: user_id });

  let post_no = user.post_no + 1;
  const result = await User.updateOne({ _id: user_id }, { post_no });

  const newPostObj = await Post.create(newPost);
  res.status(200).send({ success: true, message: "Post Added" });
};

const remDays = async (req, res) => {
  const { _id } = req.body;
  const postData = await Post.findOne({ _id });
  let postDay = postData.postDate;

  let postDate = new Date(postDay);
  let date = new Date();
  let diff = date.getDate() - postDate.getDate();
  log(diff);
  res.status(200).send({ success: true, message: "remdays", diff });
};

const getPostByID = async (req, res) => {
  const { _id } = req.body;
  try {
    const post = await Post.findOne({ _id });
    res.status(200).send({ success: true, messgae: "post found", post });
  } catch (error) {
    res.status(400).send({ success: false, messgae: error.message });
  }
};

module.exports = {
  getPostByUserId,
  addPost,
  remDays,
  getApprovedPosts,
  getPostByID,
};
