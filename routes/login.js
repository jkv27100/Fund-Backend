const router = require("express").Router();
const debug = require("debug")("app:dev");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

const users = [
  {
    name: "jaggu",
    email: "jaggu@gmail.com",
    password: "123",
  },
];

router.post("/", (req, res) => {
  const user = _.pick(req.body, ["email", "password"]);
  if (!users.find((e) => e.email === user.email))
    return res.status(400).send("invalid username or password");
  if (!users.find((e) => e.password === user.password))
    return res.status(400).send("invalid username or password");

  const token = jwt.sign(user, "naruto");

  res.send("Login succesful " + token);
});

module.exports = router;
