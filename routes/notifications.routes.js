const router = require("express").Router();
const notificationController = require('../controllers/notification.controller');

router.get("/", (req, res) => {
    res.send("Noti root working")
})
router.get("/get-notifi",notificationController.getNotification);
router.post("/add-notifi",notificationController.addNotification);
router.get("/delete-noti",notificationController.deleteNotification);

module.exports = router;

