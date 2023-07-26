const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, featuredImage, content, tags, authorId } = req.body;

    // Create a new post using the Post model
    const post = new Post({
      title,
      featuredImage,
      content,
      tags,
      authorId,
    });

    // Save the post to the database
    const savedPost = await post.save();

    res.status(201).json({ data: savedPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
};
