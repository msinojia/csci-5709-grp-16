const express = require('express');
const articleListController = require('../controllers/articleListController');

const router = express.Router();

// Define the route for fetching all articles
router.get('/', articleListController.getAllArticles);

module.exports = router;
