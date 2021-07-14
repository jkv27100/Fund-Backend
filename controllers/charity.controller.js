const log = require("debug")("app:dev");
const nodemailer = require("nodemailer");

const sendMailService = (userMail, fileName, image) => {
  let mailTransporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "fundingtest@hotmail.com",
      pass: "zedzee4545",
    },
  });

  let mailDetails = {
    from: "fundingtest@hotmail.com",
    to: "admin@abhijith.codes.",
    subject: "Verification for Charity Role",
    text: `verify the details of ${userMail} for charity role`,
    attachments: [
      {
        filename: fileName,
        path: `data:image/gif;base64,${image}`,
      },
    ],
  };

  mailTransporter.sendMail(mailDetails, (err, data) => {
    if (err) {
      log(err);
    } else {
      log(data);
    }
  });
};

const applyForCharity = (req, res) => {
  const details = req.body;
  const image = req.file;
  log(details.email);
  log(image.originalname);

  const response = sendMailService(
    details.mail,
    image.originalname,
    image.buffer.toString("base64")
  );
  log(response);
  res.status(200).send({
    success: true,
    message: "Mail sent for verification",
  });
};

module.exports = { applyForCharity };
