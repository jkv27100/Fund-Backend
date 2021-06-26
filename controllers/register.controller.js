const User = require("../models/user");
const log = require("debug")("app:dev");
const _ = require("lodash");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  const users = await User.find({});

  res.send(users.map((e) => _.pick(e, ["name", "email"])));
};

const registerUser = async (req, res) => {
  const user = _.pick(req.body, ["name", "email", "password", "phone"]);
  const isExisting = await User.findOne({ email: user.email }).select({
    email: 1,
  });

  if (isExisting) return res.status(400).send("user already exists try log in");

  const newUserObj = new User(user);
  const salt = await bcrypt.genSalt(10);
  newUserObj.password = await bcrypt.hash(user.password, salt);
  await newUserObj.save();

  res.status(200).send("Registerd succesfully");
};

module.exports = { getUsers, registerUser };
