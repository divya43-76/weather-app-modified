import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const WeatherForecast = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    date: null
  });
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date) => {
    setSearchData({
      ...searchData,
      date
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implement weather data fetching from backend
      // For now, we'll use mock data
      setWeatherData({
        temperature: 25,
        condition: 'Sunny',
        humidity: 65,
        windSpeed: 10,
        activities: [
          'Beach visit',
          'Outdoor sports',
          'City tour'
        ]
      });
    } catch (err) {
      console.error('Error fetching weather data:', err);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Weather Forecast</h2>
          <Card className="mb-4">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={searchData.location}
                    onChange={handleChange}
                    required
                    placeholder="Enter location"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <DatePicker
                    selected={searchData.date}
                    onChange={handleDateChange}
                    className="form-control"
                    dateFormat="MMMM d, yyyy"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Get Forecast
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {weatherData && (
            <Card>
              <Card.Body>
                <h3 className="text-center mb-4">Weather Information</h3>
                <Row>
                  <Col md={6}>
                    <p><strong>Temperature:</strong> {weatherData.temperature}°C</p>
                    <p><strong>Condition:</strong> {weatherData.condition}</p>
                    <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
                    <p><strong>Wind Speed:</strong> {weatherData.windSpeed} km/h</p>
                  </Col>
                  <Col md={6}>
                    <h4>Suggested Activities</h4>
                    <ul>
                      {weatherData.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherForecast; 