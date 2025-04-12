const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const { location } = req.query;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
