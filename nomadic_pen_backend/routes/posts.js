const express = require("express");
const postsController = require("../controllers/postsController");

const router = express.Router();

// Define the route for creating a new post
router.post("/", postsController.createPost);

module.exports = router;
