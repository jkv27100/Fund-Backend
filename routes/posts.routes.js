const router = require("express").Router();
const postController = require("../controllers/post.controller");

router.get("/get_post", postController.getPost);
router.post("/add_post", postController.addPost);

module.exports = router;
