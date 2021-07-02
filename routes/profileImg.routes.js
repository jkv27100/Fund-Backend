const router = require("express").Router();
const multer = require("multer");
const log = require("debug")("app:dev");
const {
  uploadImage,
  getImage,
} = require("../controllers/imagehandle.controller");

const storage = multer.memoryStorage();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Invalid file", false);
  }
};

const upload = multer({ storage, fileFilter });

router.post("/get_image", getImage);

router.post("/", upload.single("profile"), uploadImage);

module.exports = router;
