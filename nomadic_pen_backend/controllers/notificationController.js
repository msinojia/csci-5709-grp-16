/* Author: Meet Sinojia */

const Notification = require("../models/Notification");
const LikeNotification = require("../models/LikeNotification");
const CommentNotification = require("../models/CommentNotification");
const FollowNotification = require("../models/FollowNotification");
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

const addLikeNotification = async (notifiedUser, actionUser, postId) => {
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

const addCommentNotification = async (notifiedUser, actionUser, postId) => {
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

const addFollowNotification = async (notifiedUser, actionUser) => {
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

module.exports = {
  addLikeNotification,
  getNotifications,
  addCommentNotification,
  addFollowNotification,
};
