const log = require("debug")("app:dev");
const User = require("../models/user");
const Post = require("../models/post");

const addBookmarkPost = async (req, res) => {
  const { postId, user_id } = req.body;
  const user = await User.findOne({ _id: user_id });
  const post = await Post.findOne({ _id: postId });

  let bookmarkArray = user.bookmarked;

  if (!bookmarkArray) bookmarkArray = [];

  let isPresent = bookmarkArray.filter((e) => {
    return e._id.toString() === postId.toString();
  });
  log(isPresent.toString());
  if (isPresent.toString())
    return res
      .status(400)
      .send({ success: false, message: "Already bookmarked" });

  bookmarkArray.push(post);

  const result = await User.updateOne(
    { _id: user_id },
    { bookmarked: bookmarkArray }
  );

  const newPost = await Post.findOne({ _id: postId });
  res.status(200).send({ success: true, message: "Post added to bookmarks" });
};

const removeBookmark = async (req, res) => {
  const { postId, user_id } = req.body;
  const user = await User.findOne({ _id: user_id });
  let bookmarkArray = user.bookmarked;
  if (!bookmarkArray) bookmarkArray = [];

  let newArray = bookmarkArray.forEach((e) => e !== postId);
  if (!newArray) newArray = [];
  const result = await User.updateOne(
    { _id: user_id },
    { bookmarked: newArray }
  );
  const newUser = await User.findOne({ _id: user_id });
  res
    .status(200)
    .send({ success: true, message: "Post removed from bookmarks", newUser });
};

const getBookmarkedPosts = async (req, res) => {
  const { user_id } = req.body;
  const { bookmarked } = await User.findOne({ _id: user_id });

  res.status(200).send({ success: true, bookmarked });
};

const upvotePost = async (req, res) => {
  const { user_id, post_id } = req.body;
  const post = await Post.findOne({ _id: post_id });
  let newLikedArray = post.likedUsers;

  if (newLikedArray.includes(user_id))
    return res
      .status(400)
      .send({ success: false, message: "You have already liked" });
  newLikedArray.push(user_id);

  const result = await Post.updateOne(
    { _id: post_id },
    { likedUsers: newLikedArray }
  );

  const upvote = post.upvotes + 1;
  const result2 = await Post.updateOne({ _id: post_id }, { upvotes: upvote });

  res.status(200).send({ success: true, message: "post liked" });
};

module.exports = {
  addBookmarkPost,
  removeBookmark,
  getBookmarkedPosts,
  upvotePost,
};
