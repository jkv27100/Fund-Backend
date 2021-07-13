const router = require("express").Router();
const transactionController = require("../controllers/transact.controller");


router.get("/",(req,res) => {
    res.send("Transact route root working.")
})


router.post("/send",transactionController.sendEth);

module.exports = router;