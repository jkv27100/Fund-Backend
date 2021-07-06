const router = require("express").Router();
const mailController =  require("../controllers/sendMail.controller");


router.get("/send_mail", mailController.sendMail);

module.exports = router;