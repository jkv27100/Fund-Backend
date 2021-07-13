const router = require("express").Router();
const {
  addBookmarkPost,
  removeBookmark,
  getBookmarkedPosts,
} = require("../controllers/interaction.controller");

router.post("/add_bookmark", addBookmarkPost);
router.post("/remove_bookmark", removeBookmark);
router.post("/getBookmarked", getBookmarkedPosts);

module.exports = router;
