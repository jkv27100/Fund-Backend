const router = require("express").Router();
const multer = require("multer");
const log = require("debug")("app:dev");
const { applyForCharity } = require("../controllers/charity.controller");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Invalid file", false);
  }
};

const upload = multer({ storage, fileFilter });

router.post("/", upload.single("adhar"), applyForCharity);

module.exports = router;
