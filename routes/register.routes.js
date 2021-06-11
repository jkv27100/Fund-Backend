const router = require("express").Router();
const {
  registerUser,
  getUsers,
} = require("../controllers/register.controller");

router.get("/", (req, res) => getUsers(req, res));

router.post("/", (req, res) => registerUser(req, res));

module.exports = router;
