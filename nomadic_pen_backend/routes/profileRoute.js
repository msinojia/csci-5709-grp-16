const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Route for uploading profile picture
router.post('/uploadProfilePicture', profileController.uploadProfilePicture);
router.get('/getUserProfileDetails/:email', profileController.getUserProfileDetails);

module.exports = router;
