const router = require("express").Router();
const Web3 = require("web3");
const fetch = require("node-fetch");
const {accounts} = require("../accounts");
let web3 = new Web3("http://127.0.0.1:7545");

const getBalance = () => {
    console.log(web3.eth.getAccounts())
}

router.get('/', (req,res)=>{
    var balance = web3.eth.getBalance(req.body.accountNo);
    balance.then(c => { res.send({"balance" : (c / 1000000000000000000)})});
})

module.exports = router;