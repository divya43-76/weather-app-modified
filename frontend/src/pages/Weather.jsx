import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get("http://localhost:5000/weather?city=Chennai");
        setWeather(response.data);
      } catch (err) {
        setError("Failed to fetch weather data");
        console.error(err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h2>Welcome to Weather-Based Trip Planner</h2>
      <h3>Current Weather:</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather ? (
        <div>
          <p><strong>City:</strong> {weather.name}</p>
          <p><strong>Temperature:</strong> {weather.temp}°C</p>
          <p><strong>Condition:</strong> {weather.description}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
