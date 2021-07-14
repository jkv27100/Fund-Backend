const router = require('express').Router();
const fetch = require("node-fetch");

router.post("/", async (req, res) => {
        const lat = req.body.cords.lat;
        const long = req.body.cords.long;
        const url = `http://api.positionstack.com/v1/reverse?access_key=307964d026498c86a0fa9c84b4381213&query=${lat},${long}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        console.log(data.data[0].locality);
        console.log(data.data[0].county);
        res.send({"locality" :data.data[0].locality, "county": data.data[0].county })
})

module.exports = router;