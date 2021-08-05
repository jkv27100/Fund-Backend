const log = require("debug")("app:dev");
const nodemailer = require("nodemailer");
const User = require("../models/user");

const sendMailService = (OTP, email) => {
  let mailTransporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "fundingtest@hotmail.com",
      pass: "zedzee4545",
    },
  });

  let mailDetails = {
    from: "fundingtest@hotmail.com",
    to: `${email}`,
    subject: "OTP for Password change",
    text: `Do not share this with anyone`,
    html: `Do not share this OTP with anyone, Your OTP for password change is <b>${OTP}<b>`,
  };

  mailTransporter.sendMail(mailDetails, (err, data) => {
    if (err) {
      log(err);
    } else {
      log(data);
    }
  });
};

const sendMailOTP = (req, res) => {
  const { email } = req.body;
  log(email);
  const OTP = Math.floor(100000 + Math.random() * 900000);
  sendMailService(OTP, email);
  res.status(200).send({ success: true, message: "OTP send to mail", OTP });
};

const changePassword = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOneAndUpdate({ email }, { password });
  res.status(200).send({ success: true, message: "Password changed" });
};

module.exports = { sendMailOTP, changePassword };
