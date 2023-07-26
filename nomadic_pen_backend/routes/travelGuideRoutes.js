const express = require('express');
const router = express.Router();

const travelGuideController = require('../controllers/travelGuideController');

router.get('/travel-guide', travelGuideController.fetchTravelGuidePreviews);

router.get('/travel-guide/fetch-feature-cities', travelGuideController.fetchFeatureCities);

router.get('/travel-guide/fetch-feature-durations', travelGuideController.fetchFeatureDurations);

router.post('/travel-guide/view-blog')

module.exports = router;