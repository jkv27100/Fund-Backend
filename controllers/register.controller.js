const User = require("../models/user");
const log = require("debug")("app:dev");
const _ = require("lodash");

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.send(users);

  // res.send(users.map((e) => _.pick(e, ["name", "email"])));
};

const registerUser = async (req, res) => {
  const user = req.body;
  const isExisting = await User.find({ email: user.email }).select({
    email: 1,
  });

  if (isExisting.toString()) return res.status(400).send("user already exists");

  const newUserObj = await User.create(user);
  res.status(200).send("Registerd");
};

module.exports = { getUsers, registerUser };
