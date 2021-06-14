const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//need to reconsider the notification schema model
const notiDetails = new Schema({
    title : {
        type : String,
        required : true
    },
    details : {
        type : String,
        required : true
    },
    notificationId : {
        type : Number,
        required : true
    }
});

const notificationSchema = new Schema({
    userId : {
        type: Number,
        required: true
    },
    userNotifications : notiDetails
}, {timestamps : true});

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;