const router = require("express").Router();
const loginContoller = require("../controllers/login.controller");

router.post("/", (req, res) => loginContoller(req, res));

module.exports = router;
