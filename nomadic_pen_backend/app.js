const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./db");
const postRoutes = require("./routes/posts");
const scheduledPostRoutes = require("./routes/scheduledPosts");
const articleRoutes = require('./routes/articleListRoutes');

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());

// Set up MongoDB connection
connectDB();

// Define API routes
app.use("/posts", postRoutes);
app.use("/scheduled-posts", scheduledPostRoutes);
app.use("/fetchAllArticles", articleRoutes);

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
