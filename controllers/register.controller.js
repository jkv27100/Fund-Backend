const User = require("../models/user");
const log = require("debug")("app:dev");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {accounts} = require('../accounts');

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

const getCount = async () => {
  let bx = 0;
    User.countDocuments({}, function (err, count) {
    console.log('count is', count)
    // let c = count;
    console.log('err is ', err)
    bx = count
    return count;
    
  });

}
let px =  getCount();
console.log("count iss ", px)
const registerUser = async (req, res) => {
  const user = _.pick(req.body, ["name", "email", "password", "phone"]);
  const isExisting = await User.findOne({ email: user.email }).select({
    email: 1,
  });

  if (isExisting) return res.status(400).send("user already exists try log in");
  // let c = 0;

  // const userAcc = {"accountNo" : accounts[c]};
  // const user2 = {...userAcc, ...user};
  const newUserObj = new User(user);
  log(user);
  const salt = await bcrypt.genSalt(10);
  newUserObj.password = await bcrypt.hash(user.password, salt);
  log(newUserObj);
  let cx = getCount();
  console.log(accounts[cx])
  // newUserObj.accountNo = accounts[cx];
  await newUserObj.save();

  res.status(200).send("Registerd succesfully");
};

module.exports = { getUsers, registerUser };
