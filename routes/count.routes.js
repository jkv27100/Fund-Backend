const router = require("express").Router();
const User = require("../models/user");

router.get("/", (req, res)=>{
        User.countDocuments({}, function (err, count) {
        // console.log('count is', count)
        // console.log('err is ', err)
        res.json({"count" : count});
      });
})

module.exports = router;