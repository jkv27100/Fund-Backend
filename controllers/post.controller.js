const Post = require('../models/post');

const getPost = async(req, res) => {
    const postRecords = await Post.find({});
    res.json(postRecords);
    //can be modified to getPostById
}

const addPost = async (req, res) => {
    const postRecord = req.body;
    const response = await Post.create(postRecord);
    console.log(response);
    res.json({status : "post addition success"})
}

module.exports = {
    getPost,
    addPost
}


