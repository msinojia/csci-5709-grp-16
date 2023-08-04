/* Author: Meet Sinojia */

const mongoose = require("mongoose");
const Notification = require("./Notification");
const notificationKinds = require("../utils/notificationKinds");

const likeNotificationSchema = new mongoose.Schema({
  likedBy: {
    type: String,
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const LikeNotification = Notification.discriminator(
  notificationKinds.LIKE,
  likeNotificationSchema
);

module.exports = LikeNotification;
