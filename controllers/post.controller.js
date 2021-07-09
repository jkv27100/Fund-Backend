const Post = require("../models/post");
const log = require("debug")("app:dev");

const getPostById = async (req, res) => {
  const { user_id } = req.body;
  const postData = await Post.find({ user_id });

  res.status(200).send({ success: true, message: "Found posts", postData });
};

const getApprovedPosts = async (req, res) => {
  const posts = await Post.find({ isAprroved: true });
};

const addPost = async (req, res) => {
  const images = req.files.map((e) => e.buffer.toString("base64"));

  const newPost = {
    images,
    ...req.body,
  };

  const newPostObj = await Post.create(newPost);
  res.status(200).send({ success: true, message: "Post Added" });
};

module.exports = {
  getPostById,
  addPost,
  getApprovedPosts,
};
