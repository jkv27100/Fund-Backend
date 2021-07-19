const router = require("express").Router();
var QRCode = require("qrcode");
const log = require("debug")("app:dev");

router.post("/", (req, res) => {
  let qrString = req.body.accountNo;

  QRCode.toDataURL(qrString, { type: "terminal" }, function (err, url) {
    res.send({ qr: url });
  });
});

module.exports = router;
