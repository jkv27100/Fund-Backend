const router = require("express").Router();
const authenticate = require("../controllers/login.controller");

router.post("/", authenticate);

module.exports = router;
