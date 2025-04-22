import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const TripPlanner = () => {
  const [tripData, setTripData] = useState({
    destination: '',
    startDate: null,
    endDate: null,
    activities: [],
    notes: ''
  });

  const handleChange = (e) => {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date, field) => {
    setTripData({
      ...tripData,
      [field]: date
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implement trip creation logic with backend
      console.log('Trip creation attempt:', tripData);
    } catch (err) {
      console.error('Error creating trip:', err);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Plan Your Trip</h2>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control
                    type="text"
                    name="destination"
                    value={tripData.destination}
                    onChange={handleChange}
                    required
                    placeholder="Enter your destination"
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Date</Form.Label>
                      <DatePicker
                        selected={tripData.startDate}
                        onChange={(date) => handleDateChange(date, 'startDate')}
                        className="form-control"
                        dateFormat="MMMM d, yyyy"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>End Date</Form.Label>
                      <DatePicker
                        selected={tripData.endDate}
                        onChange={(date) => handleDateChange(date, 'endDate')}
                        className="form-control"
                        dateFormat="MMMM d, yyyy"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="notes"
                    value={tripData.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Add any additional notes about your trip"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Create Trip
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TripPlanner; 