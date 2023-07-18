const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postsRouter = require("./routes/posts");

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());

// Set up MongoDB connection
mongoose
  .connect("mongodb+srv://msinojia7:meet2311@summer23.kr0yjab.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define API routes
app.use("/posts", postsRouter);

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
