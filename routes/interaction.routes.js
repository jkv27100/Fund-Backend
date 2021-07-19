const router = require("express").Router();
const {
  addBookmarkPost,
  removeBookmark,
  getBookmarkedPosts,
  upvotePost,
} = require("../controllers/interaction.controller");

router.post("/add_bookmark", addBookmarkPost);
router.post("/remove_bookmark", removeBookmark);
router.post("/getBookmarked", getBookmarkedPosts);
router.post("/like_post", upvotePost);

module.exports = router;
