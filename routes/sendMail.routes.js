const router = require("express").Router();
const multer = require("multer");
const fetch = require("node-fetch");
var path = require("path");
const log = require("debug")("app:dev");
const mailController = require("../controllers/sendMail.controller");
// var upload = multer({ dest: 'uploads/' });
let count = 1;

const name = () => {
  let s = "upload" + count;
  count++;
  if (count > 2) {
    count = 1;
  }
  return s;
};
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, name() + ".pdf"); //Appending extension
  },
});

var upload = multer({ storage: storage });
const fs = require("fs");
const http = require("http");

router.get("/send_mail", mailController.sendMail);
router.post("/get_file", upload.array("file", 2), async (req, res) => {
  let response = await fetch("http://localhost:3030/api/mail/send_mail");
  res.send("upload success");
});

module.exports = router;
