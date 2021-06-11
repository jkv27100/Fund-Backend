const debug = require("debug")("app:dev");
const _ = require("lodash");

const users = [
  {
    name: "jaggu",
    email: "jaggu@gmail.com",
    password: "123",
  },
];

const getUsers = (req, res) => {
  res.send(users.map((e) => _.pick(e, ["name", "email"])));
};

const registerUser = (req, res) => {
  const newUser = _.pick(req.body, ["name", "email", "password"]);

  if (users.find((e) => e.email === req.body.email))
    return res.status(400).send("user already exists");

  users.push(newUser);
  res.status(200).send("Registerd");
};

module.exports = { getUsers, registerUser };
