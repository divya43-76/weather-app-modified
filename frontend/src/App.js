import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TripPlanner from './pages/TripPlanner';
import MyTrips from './pages/MyTrips';
import WeatherForecast from './pages/WeatherForecast';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/my-trips" element={<MyTrips />} />
            <Route path="/weather-forecast" element={<WeatherForecast />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 