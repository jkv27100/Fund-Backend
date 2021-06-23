const log = require("debug")("app:dev");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticate = async (req, res) => {
  const user = _.pick(req.body, ["email", "password"]);

  const Email = await User.find({ email: user.email });
  if (!Email.toString())
    return res.status(400).send("invalid username or password");

  const Password = await User.find({ password: user.password });
  if (!Password.toString())
    return res.status(400).send("invalid username or password");

  const token = jwt.sign(user, process.env.JWT_KEY);

  res.send(`Login of ${user.email} is successful JWT token is ${token}`);
};

module.exports = authenticate;
