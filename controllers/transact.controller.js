const Web3 = require("web3");
const fetch = require("node-fetch");
const {accounts} = require("../accounts");
let web3 = new Web3("http://127.0.0.1:7545");

const sendE = (s,r) => {
    web3.eth.getAccounts(function(error, result) {
    web3.eth.sendTransaction(
        {
          from:s,
          to:r,
          value:  "1000000000000000000", 
          data: "0xdf"
        }, function(err, transactionHash) {
            if (!err)
            console.log(transactionHash + " success"); 
        });
    });
}
const converter = async(val) => {
    let response = await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=INR&api_key=665b5772ed67deba30dc1d011573ca0fa5b909995eeb994bfe47b815787fdc7f");
    let data = await response.json();
    let ethVal = data.ETH.INR;
    let inr = 1 / Math.floor(ethVal);
    console.log(inr * val);
    const weiVal = Web3.utils.toWei(inr, 'ether');
    console.log(weiVal);
}

const sendEth = async (req, res) => {
    const senderAddress = req.body.sendEthAddy;
    const recipientAddress = req.body.recEthAddy;
    const val = req.body.val;
    let s = accounts[senderAddress];
    let r = accounts[recipientAddress];
    sendE(s,r,val)
    res.send("send success");
    console.log(s,r)
}
module.exports = {
    sendEth
}