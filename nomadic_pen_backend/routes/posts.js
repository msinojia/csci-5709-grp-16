const express = require("express");
const postsController = require("../controllers/postsController");

const router = express.Router();

// Define the route for creating a new post
router.post("/", postsController.createPost);


/* By Jamini Bhatt */
router.get("/", postsController.fetchPosts); //Jamini
router.get("/:id", postsController.fetchPostById); //Jamini


module.exports = router;
