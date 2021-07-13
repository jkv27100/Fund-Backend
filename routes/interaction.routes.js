const router = require("express").Router();
const {
  addBookmarkPost,
  removeBookmark,
} = require("../controllers/interaction.controller");

router.post("/add_bookmark", addBookmarkPost);
router.post("/remove_bookmark", removeBookmark);

module.exports = router;
