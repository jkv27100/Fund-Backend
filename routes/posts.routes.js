const router = require("express").Router();
const postController = require("../controllers/post.controller");


router.get('/', (req, res) => {
    res.send("posts route working");
});

router.get('/get-post', postController.getPost);
router.post('/add-post', postController.addPost);


module.exports = router;