const express = require('express');
const router = express.Router();
const Route = require('../models/Route');

router.get('/', async (req, res) => {
  try {
    const routes = await Route.find();
    res.json(routes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
