const router = require("express").Router();
const {
  registerUser,
  getUsers,
} = require("../controllers/register.controller");

router.post("/get_user", getUsers);

router.post("/", registerUser);

module.exports = router;
