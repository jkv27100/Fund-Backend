const router = require("express").Router();
const addComment = require("../controllers/comment.controller");

router.post("/", addComment);

module.exports = router;
