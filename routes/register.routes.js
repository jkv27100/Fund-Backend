const router = require("express").Router();
const {
  registerUser,
  getUsers,
} = require("../controllers/register.controller");

router.get("/", getUsers);

router.post("/", registerUser);

module.exports = router;
