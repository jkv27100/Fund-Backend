const router = require("express").Router();
const { sendMailOTP } = require("../controllers/forgotPassword.controller");

router.post("/sendOTP", sendMailOTP);
// router.post("/changePassword",changePassword)

module.exports = router;
