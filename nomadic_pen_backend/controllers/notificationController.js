/* Author: Meet Sinojia */

const Notification = require("../models/Notification/Notification");
const LikeNotification = require("../models/Notification/LikeNotification");
const CommentNotification = require("../models/Notification/CommentNotification");
const FollowNotification = require("../models/Notification/FollowNotification");
const User = require("../models/user");

exports.getNotifications = async (userId) => {
  try {
    const notifications = await Notification.find({ notifiedUser: userId })
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

exports.addLikeNotification = async (notifiedUser, actionUser, postId) => {
  try {
    const newLikeNotification = new LikeNotification({
      notifiedUser,
      actionUser,
      postId,
    });

    await newLikeNotification.save();

    return newLikeNotification;
  } catch (error) {
    throw new Error("Failed to add like notification: " + error);
  }
};

exports.addCommentNotification = async (notifiedUser, actionUser, postId) => {
  try {
    const newCommentNotification = new CommentNotification({
      notifiedUser,
      actionUser,
      postId,
    });

    await newCommentNotification.save();

    return newCommentNotification;
  } catch (error) {
    throw new Error("Failed to add comment notification: " + error);
  }
};

exports.addFollowNotification = async (notifiedUser, actionUser) => {
  try {
    const newFollowNotification = new FollowNotification({
      notifiedUser,
      actionUser,
    });

    await newFollowNotification.save();

    return newFollowNotification;
  } catch (error) {
    throw new Error("Failed to add follow notification: " + error);
  }
};

exports.markNotificationAsRead = async (req, res) => {
  const { notificationId } = req.params;

  try {
    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { read: true },
      { new: true }
    );

    if (!notification) {
      return res
        .status(404)
        .json({ success: false, message: "Notification not found." });
    }

    res.status(200).json({ success: true, notification });
  } catch (error) {
    console.error("Error marking notification as read:", error);
    res.status(500).json({
      success: false,
      message: "Failed to mark notification as read.",
    });
  }
};

exports.markAllNotificationsAsRead = async (req, res) => {
  const { userId } = req.body;

  try {
    const updatedNotifications = await Notification.updateMany(
      { notifiedUser: userId },
      { read: true }
    );

    res.status(200).json({ success: true, updatedNotifications });
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
    res.status(500).json({
      success: false,
      message: "Failed to mark all notifications as read.",
    });
  }
};
