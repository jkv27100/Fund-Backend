const router = require("express").Router();
const notificationController = require("../controllers/notification.controller");
//or const {getNotification,getNotificationById..} = require(...path)
router.get("/", (req, res) => {
  res.send("Noti root working");
});

router.get("/get-noti", notificationController.getNotification);
router.get("/get-noti/:user_id", notificationController.getNotificationById);
router.post("/add-noti", notificationController.addNotification);
router.get("/delete-noti", notificationController.deleteNotification);

module.exports = router;
