const log = require("debug")("app:dev");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const authenticate = async (req, res) => {
  const creds = _.pick(req.body, ["email", "password"]);

  const user = await User.findOne({
    email: creds.email,
  });

  if (!user)
    return res.status(400).send({ error: "invalid username or password" });

  const validPassword = await bcrypt.compare(creds.password, user.password);

  if (!validPassword)
    return res.status(400).send({ error: "invalid username or password" });

  const data = _.pick(user, [
    "profile_img",
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
    "posts",
  ]);
  //need to do this with omit

  // const data  = _.omit(user,['password'])
  const authToken = jwt.sign(data, process.env.JWT_KEY);

  res.send({ authToken });
};

module.exports = authenticate;
