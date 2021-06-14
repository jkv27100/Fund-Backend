const  Notification = require('../models/notification');

const getNotification = async (req, res) => {
    const notificationRecords = await Notification.find({});
    res.json(notificationRecords);
}

const getNotificationById = async (req, res) => {
    const id = req.params.user_id
    const notificationRecords = await Notification.find({'userId' : id});
    res.json(notificationRecords);
}


const addNotification = async (req, res) => {
    // const notification = new Notification({
    //     userId : 101,
    //     userNotifications: {title : "test notification 1", details : "This is the first test notification"}
    // })
    // notification.save()
    //     .then((result => res.send(result)))
    //     .catch(err => console.log(err));
    const notificationRecord = req.body;
    const response = await Notification.create(notificationRecord);
    console.log(response);
    res.json({status :'success'})
}

const deleteNotification = (req, res) => {
    res.send("delete noti")
}

module.exports = {
    getNotification,
    addNotification,
    deleteNotification,
    getNotificationById
}