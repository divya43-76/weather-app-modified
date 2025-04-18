import axios from 'axios';

export const getWeather = async (req, res) => {
  const { city } = req.query;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
