import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // TODO: Fetch trips from backend
    // For now, we'll use mock data
    setTrips([
      {
        id: 1,
        destination: 'Paris',
        startDate: '2024-05-01',
        endDate: '2024-05-07',
        weather: 'Sunny',
        activities: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise']
      },
      {
        id: 2,
        destination: 'Tokyo',
        startDate: '2024-06-15',
        endDate: '2024-06-22',
        weather: 'Partly Cloudy',
        activities: ['Shibuya Crossing', 'Senso-ji Temple', 'Tsukiji Market']
      }
    ]);
  }, []);

  const handleDeleteTrip = async (tripId) => {
    try {
      // TODO: Implement trip deletion with backend
      console.log('Deleting trip:', tripId);
      setTrips(trips.filter(trip => trip.id !== tripId));
    } catch (err) {
      console.error('Error deleting trip:', err);
    }
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">My Trips</h2>
          <div className="text-center">
            <Link to="/trip-planner">
              <Button variant="primary" className="mt-3">
                Plan New Trip
              </Button>
            </Link>
          </div>
        </Col>
      </Row>

      <Row>
        {trips.map(trip => (
          <Col key={trip.id} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{trip.destination}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Weather:</strong> {trip.weather}
                </Card.Text>
                <Card.Text>
                  <strong>Planned Activities:</strong>
                  <ul>
                    {trip.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" size="sm">
                    View Details
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteTrip(trip.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyTrips; 