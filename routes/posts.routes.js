const router = require("express").Router();
const multer = require("multer");
const log = require("debug")("app:dev");
const postController = require("../controllers/post.controller");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Invalid file", false);
  }
};

const upload = multer({ storage, fileFilter });

router.post("/get_post", postController.getPostById);
router.get("/get_post", postController.getApprovedPosts);
router.post("/add_post", upload.array("images", 10), postController.addPost);
router.post("/rem_days", postController.remDays);

module.exports = router;
