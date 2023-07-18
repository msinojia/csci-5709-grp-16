const mongoose = require("mongoose");

const scheduledPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  scheduledDateTime: {
    type: Date,
    required: true,
  },
});

const ScheduledPost = mongoose.model("ScheduledPost", scheduledPostSchema);

module.exports = ScheduledPost;
