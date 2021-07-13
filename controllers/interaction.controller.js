const log = require("debug")("app:dev");
const User = require("../models/user");
const Post = require("../models/post");

const addBookmarkPost = async (req, res) => {
  const { postId, user_id } = req.body;
  const user = await User.findOne({ _id: user_id });
  const post = await Post.findOne({ _id: postId });

  let bookmarkArray = user.bookmarked;

  bookmarkArray.push(post);

  const result = await User.updateOne(
    { _id: user_id },
    { bookmarked: bookmarkArray }
  );

  const newPost = await Post.findOne({ _id: postId });
  res
    .status(200)
    .send({ success: true, message: "Post added to bookmarks", newPost });
};

const removeBookmark = async (req, res) => {
  const { postId, user_id } = req.body;
  const user = await User.findOne({ _id: user_id });
  let bookmarkArray = user.bookmarked;

  const newArray = bookmarkArray.forEach((e) => e !== postId);
  const result = await User.updateOne(
    { _id: user_id },
    { bookmarked: newArray }
  );
  const newUser = await User.findOne({ _id: user_id });
  res
    .status(200)
    .send({ success: true, message: "Post removed from bookmarks", newUser });
};

module.exports = { addBookmarkPost, removeBookmark };
