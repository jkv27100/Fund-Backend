const Web3 = require("web3");
const fetch = require("node-fetch");
const { accounts } = require("../accounts");
const User = require("../models/user");
const Post = require("../models/post");
let web3 = new Web3("http://127.0.0.1:7545");

var hash = "";
const sendE = async (s, r, v) => {
  web3.eth.getAccounts(function (error, result) {
    web3.eth.sendTransaction(
      {
        from: s,
        to: r,
        value: v,
        data: "0xdf",
      },
      function (err, transactionHash) {
        if (!err) hash = transactionHash;
        console.log("hash is ", hash);
      }
    );
  });
};

let INRval = 0;
const converter = async (val) => {
  let response = await fetch(
    "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=INR&api_key=665b5772ed67deba30dc1d011573ca0fa5b909995eeb994bfe47b815787fdc7f"
  );
  let data = await response.json();
  let ethVal = data.ETH.INR;
  let inr = 1 / Math.floor(ethVal);
  console.log("inr ", inr * val);
  INRval = inr * val;
  const weiVal = Web3.utils.toWei((inr * val).toString(), "ether");
  return weiVal;
};

const sendEth = async (req, res) => {
  const senderAddress = req.body.sendEthAddy;
  const recipientAddress = req.body.recEthAddy;
  const val = req.body.val;
  const toUser = await User.findOne({ accountNo: recipientAddress });
  const fromUser = await User.findOne({ accountNo: senderAddress });
  const currentPost = await Post.findOne({ user_id: toUser._id });

  const updateUser = async () => {
    let postOwnerTransac = toUser.transactions;
    let currentUserTransac = fromUser.transactions;
    postOwnerTransac.push(hash);
    const done = await User.updateOne(
      { _id: toUser._id },
      { transactions: postOwnerTransac }
    );
    const don2 = await User.updateOne(
      { _id: fromUser._id },
      { transactions: currentUserTransac }
    );

    let totalAmount = parseInt(currentPost.amountRaised + INRval);

    const one = await Post.updateOne(
      { user_id: toUser._id },
      { amountRaised: totalAmount }
    );

    let totalDonation = fromUser.donated + INRval;
    const don = await User.updateOne(
      { _id: fromUser._id },
      { donated: totalDonation }
    );
  };

  //   let s = accounts[senderAddress];
  let s = accounts.find((e) => e === senderAddress);
  //   let r = accounts[recipientAddress];
  let r = accounts.find((e) => e === recipientAddress);

  let pox = 0;
  converter(val).then((c) => {
    sendE(s, r, c);
    setTimeout(() => {
      updateUser();
      res.send({ status: "success", hash: hash });
    }, 2000);
    //   console.log(s, r, transHash);
  });

  // console.log("converted value : ", pox);
  // // sendE(s,r,val)
  // res.send("send success");
  // console.log(s,r)
};
module.exports = {
  sendEth,
};
