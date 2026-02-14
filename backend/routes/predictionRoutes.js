const express = require('express');
const router = express.Router();
const { getPredictions } = require('../controllers/predictionController');

router.post('/', getPrediction);

module.exports = router;
