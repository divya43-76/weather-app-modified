require('dotenv').config(); // 👈 Always at top
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const weatherRoutes = require('./routes/weather');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/weather', weatherRoutes); // 👈 Use your weather router here

app.get("/", (req, res) => {
  res.send("Weather-Based Trip Planner API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("API KEY BEING USED:", process.env.OPENWEATHER_API_KEY); // 👈 Make sure this env var exists
});
app.use('/weather', weatherRoutes);
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
