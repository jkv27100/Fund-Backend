const Post = require("../models/post");
const User = require("../models/user");
const log = require("debug")("app:dev");

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
  const images = req.files.map((e) => e.buffer.toString("base64"));

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

module.exports = {
  getPostByUserId,
  addPost,
  remDays,
  getApprovedPosts,
};
