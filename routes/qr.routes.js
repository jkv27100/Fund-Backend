const router = require("express").Router();
var QRCode = require('qrcode')




router.get("/", (req, res)=> {
    let qrString = req.body.accountNo;
    QRCode.toDataURL(qrString,{type: 'terminal'}, function (err, url) {
        res.send({"qr":url});
      })
    
})

module.exports = router;