import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row className="text-center mb-5">
        <Col>
          <h1>Welcome to Weather Trip Planner</h1>
          <p className="lead">Plan your perfect trip with real-time weather updates</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Weather Forecast</Card.Title>
              <Card.Text>
                Get accurate weather forecasts for your destination and plan activities accordingly.
              </Card.Text>
              <Link to="/weather-forecast" className="btn btn-primary">Check Weather</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Trip Planning</Card.Title>
              <Card.Text>
                Create detailed trip itineraries with weather-appropriate activities and packing lists.
              </Card.Text>
              <Link to="/trip-planner" className="btn btn-primary">Plan Trip</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>My Trips</Card.Title>
              <Card.Text>
                Manage your saved trips, view past itineraries, and track your travel history.
              </Card.Text>
              <Link to="/my-trips" className="btn btn-primary">View Trips</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="text-center">
          <h2>Get Started</h2>
          <p>Create an account to start planning your perfect trip today!</p>
          <Link to="/register" className="btn btn-success btn-lg">Sign Up Now</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home; 