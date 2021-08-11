const Post = require("../models/post");
const Profile = require("../models/userProfile");
const log = require("debug")("app:dev");
const User = require("../models/user");

const addComment = async (req, res) => {
  const { user_id, postId, comment, date, userName } = req.body.comment;

  log(userName);

  const user = await Profile.findOne({ user_id });

  const obj = {
    user_id,
    avatar: user.profile_img.toString("base64"),
    comment,
    date,
    userName,
  };

  const post = await Post.findOne({ _id: postId });
  const newComments = post.comments;
  newComments.push(obj);
  const result = await Post.updateOne(
    { _id: postId },
    { comments: newComments }
  );
  const postOwner = await User.findOne({ _id: post.user_id });
  const newNotification = postOwner.notifications;
  newNotification.push("someone commented on your post");
  const notiResult = await User.updateOne(
    { _id: post.user_id },
    { notifications: newNotification }
  );

  res.status(200).send({ success: true, message: "Comment added!" });
};

module.exports = addComment;
