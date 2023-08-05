/* Author: Meet Sinojia */

const Notification = require("../models/Notification");
const LikeNotification = require("../models/LikeNotification");
const User = require("../models/user");

const getNotifications = async (authorId) => {
  try {
    const notifications = await Notification.find({ notifiedUser: authorId })
      .sort({ createdAt: -1 }) // Sort by createdAt field in descending order (latest first)
      .lean()
      .exec();

    // Fetch additional information for each notification
    for (const notification of notifications) {
      const actionUser = await User.findOne({ email: notification.actionUser })
        .select("firstName lastName profilePic")
        .lean()
        .exec();
      if (actionUser) {
        notification.actionUser = actionUser;
      }
    }
    return notifications;
  } catch (error) {
    throw new Error("Failed to fetch notifications: " + error);
  }
};

const addLikeNotification = async (likedBy, postId, authorId) => {
  try {
    const newLikeNotification = new LikeNotification({
      notifiedUser: authorId,
      actionUser: likedBy,
      postId,
    });

    await newLikeNotification.save();

    return newLikeNotification;
  } catch (error) {
    throw new Error("Failed to add like notification: " + error);
  }
};

module.exports = { addLikeNotification, getNotifications };
