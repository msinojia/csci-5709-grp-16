const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  featuredImage: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
