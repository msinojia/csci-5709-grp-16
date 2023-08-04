/* Author: Meet Sinojia */

const LikeNotification = require("../models/LikeNotification");

const addLikeNotification = async (likedBy, postId, authorId) => {
  try {
    const newLikeNotification = new LikeNotification({
      authorId,
      likedBy,
      postId,
    });

    await newLikeNotification.save();

    return newLikeNotification;
  } catch (error) {
    throw new Error("Failed to add like notification: " + error);
  }
};

module.exports = { addLikeNotification };
