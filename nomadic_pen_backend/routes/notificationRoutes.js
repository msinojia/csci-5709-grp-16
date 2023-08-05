/* Author: Meet Sinojia */

const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

router.get("/", async (req, res) => {
  const { authorId } = req.query;

  try {
    const notifications = await notificationController.getNotifications(authorId);
    res.json({ success: true, notifications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/like", async (req, res) => {
  const { likedBy, postId, authorId } = req.body;
  try {
    const newLikeNotification =
      await notificationController.addLikeNotification(
        likedBy,
        postId,
        authorId
      );
    res.json({ success: true, notification: newLikeNotification });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
