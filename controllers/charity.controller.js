const log = require("debug")("app:dev");
const nodemailer = require("nodemailer");

const sendMailService = (userDetails, fileName, image) => {
  let mailTransporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "fundingtest@hotmail.com",
      pass: "zedzee4545",
    },
  });

  let mailDetails = {
    from: "fundingtest@hotmail.com",
    to: "kvjagannath63@gmail.com",
    subject: "Verification for Charity Role",
    text: `verify the details of ${userDetails.name} for charity role`,
    html: `<p>Application for charity role submitted by <b>${userDetails.name}</b> with UID <b>${userDetails.UID}</b> adress <b>${userDetails.adress}</b> and email <b>${userDetails.email}</b> </p>`,
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

  const response = sendMailService(
    details,
    image.originalname,
    image.buffer.toString("base64")
  );

  res.status(200).send({
    success: true,
    message: "Mail sent for verification",
  });
};

module.exports = { applyForCharity };
