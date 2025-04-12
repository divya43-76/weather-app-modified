import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/weather?city=Chennai')
      .then(res => {
        setWeather(res.data);
        setError('');
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch weather data');
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome to Weather-Based Trip Planner</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather ? (
        <div>
          <h2>Location: {weather.name}</h2>
          <p><strong>Temperature:</strong> {weather.temp}°C</p>
          <p><strong>Description:</strong> {weather.description}</p>
        </div>
      ) : !error ? (
        <p>Loading weather...</p>
      ) : null}
    </div>
  );
};

export default Home;
