const express = require('express');
const router = express.Router();
const DataModel = require('../models/DataModel');
const { predict } = require('../services/modelService');

// Example route to get data
router.get('/data', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Example route to predict
router.post('/predict', async (req, res) => {
  try {
    const prediction = await predict(req.body);
    res.json(prediction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
