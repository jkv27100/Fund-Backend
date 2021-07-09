const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    images: {
      type: [String],
    },
    backers: {
      type: Number,
      default: 0,
    },
    goalAmount: {
      type: Number,
      required: true,
    },
    goalDays: {
      type: Number,
      default: 30,
    },
    remainingGoalDays : {
      type: Number,
      default: 0,
    },
    postDate: {
      type: String,
      default: new Date(),
    },
    amountRaised: {
      type: Number,
      default: 0,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: [String],
    },
    location: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
