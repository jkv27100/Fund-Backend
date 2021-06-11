const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    userId : {
        type: Number,
        required: true
    },
    userNotifications : {
        type: [{title : String, details : String}],
        required: true,
        default: null
    }
}, {timestamps : true});

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;