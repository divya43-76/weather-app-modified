const express = require('express');
const Destination = require('../models/Destination');
const router = express.Router();

router.get('/', async (req, res) => {
  const { search } = req.query;
  const query = search ? { name: new RegExp(search, 'i') } : {};
  const results = await Destination.find(query);
  res.json(results);
});

module.exports = router;
