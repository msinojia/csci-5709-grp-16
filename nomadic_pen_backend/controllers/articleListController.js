const Post = require("../models/Post");

// Controller function to fetch all articles
exports.getAllArticles = async (req, res) => {
    try {
        // Fetch all articles from the database
        const articles = await Post.find().lean();
        console.log('article data:',articles);
        // Respond with the fetched articles
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching articles', error: error.message });
    }
};