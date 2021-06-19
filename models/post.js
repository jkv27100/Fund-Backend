const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
    goalAmount: {
        type: Number,
        required: true
    },
    goalDays: {
        type: Number,
        required: true
    },
    amountRaised: {
        type: Number,
        required: true
    }
});


const socialInteractionsSchema = new Schema({
    upvotes: {
        type: Number
    },
    downvotes: {
        type: Number
    },
    comments: {
        type: [String]
    }
})

const postSchema = new Schema({
    postId: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true,
        default: null // add stock image link
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    percentage: {
        type: Number,
        required: true
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    socialInteractions : socialInteractionsSchema,
    goalDetails : goalSchema
    
},{timestamps : true})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;