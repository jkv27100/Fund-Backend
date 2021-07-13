const Post = require("../models/post");
const Profile = require("../models/userProfile");
const log = require("debug")("app:dev");

const addComment = async (req, res) => {
  const { user_id, postId, comment, date, userName } = req.body.comment;

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

  res.status(200).send({ success: true, message: "Comment added!" });
};

module.exports = addComment;
