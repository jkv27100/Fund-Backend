const Post = require("../models/post");
const log = require("debug")("app:dev");

const getPost = async (req, res) => {
  const postRecords = await Post.find({});
  res.send(postRecords);
};

const addPost = async (req, res) => {
  const postRecord = req.body;
  const newPostObj = await Post.create(postRecord);
  res
    .status(200)
    .send({ success: true, message: `post ${req.body.postId} is added to DB` });
};

module.exports = {
  getPost,
  addPost,
};
