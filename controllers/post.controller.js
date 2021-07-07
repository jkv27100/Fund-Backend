const Post = require("../models/post");
const log = require("debug")("app:dev");

const getPostById = async (req, res) => {
  const user_id = req.body.id;
  const postRecords = await Post.find({ user_id });
  res.status(200).send({ success: true, message: "post found", postRecords });
};

const addPost = async (req, res) => {
  const images = req.files.map((e) => e.buffer);

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
};
