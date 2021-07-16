const User = require("../models/user");
const log = require("debug")("app:dev");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {accounts} = require('../accounts');
const fetch = require('node-fetch')


const getUsers = async (req, res) => {
  const { user_id } = req.body;
  const user = await User.findOne({ _id: user_id });

  const userData = _.pick(user, [
    "balance",
    "donated",
    "isApplied",
    "isPoster",
    "isLoggedIn",
    "likedPosts",
    "bookmarked",
    "transactions",
    "_id",
    "name",
    "email",
    "phone",
    "post_no",
  ]);

  res.send({ success: true, message: "user found", userData });
};

// const getCount = async () => {
//     User.countDocuments({}, async function (err, count) {
//     console.log('count is', count)
//     console.log('err is ', err)
//     // return count;
//     let cx = await count;
//     return cx;
    
//   });
// }
// let px = getCount();
// console.log("count iss ", px)
const getCount = async () => {
  let response = await fetch('http://127.0.0.1:3030/api/count')
  let data =  await response.json();
  let c = data.count;
  return c;
  // console.log(data.count)
  // return data.count;
}
// getCount();

const registerUser = async (req, res) => {
  const user = _.pick(req.body, ["name", "email", "password", "phone"]);
  const isExisting = await User.findOne({ email: user.email }).select({
    email: 1,
  });

  if (isExisting) return res.status(400).send("user already exists try log in");
  const newUserObj = new User(user);
  log(user);
  const salt = await bcrypt.genSalt(10);
  newUserObj.password = await bcrypt.hash(user.password, salt);
  log(newUserObj);
  let cx = getCount().then(c => {
    // console.log("cx inside is ", c);
    // console.log("acc is ", accounts[c])
    newUserObj.accountNo = accounts[c]

  });
  // console.log("cx is" ,cx)
  // newUserObj.accountNo = accounts[cx];
  // console.log("userobj is ", newUserObj);
  setTimeout(()=>{
    newUserObj.save();
  },3000)


  res.status(200).send("Registerd succesfully");
};

module.exports = { getUsers, registerUser };
