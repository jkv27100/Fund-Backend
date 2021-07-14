const router = require("express").Router();
const multer = require("multer");
var path = require('path')
const mailController =  require("../controllers/sendMail.controller");
// var upload = multer({ dest: 'uploads/' });
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+'.pdf') //Appending extension
    }
  })
  
var upload = multer({ storage: storage });
const fs = require('fs')
const http =  require('http')



router.get("/sendMail", mailController.sendMail);
router.post("/get_file", upload.array('file', 10), (req, res) => {
    console.log(req.files, req.body);
    res.send("upload success");
})

module.exports = router;