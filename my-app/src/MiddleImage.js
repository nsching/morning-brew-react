import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './style.css'; // Import your CSS file

const MiddleImage = () => (
  <div className="image-overlay d-flex justify-content-start">
    <div className="content d-flex flex-column justify-content-start pl-6">
      <h1>Aloha</h1>
      <h2>Morning Brew Hawai'i</h2>
      <h3>Kailua and Kaka'ako, O'ahu</h3>
      <Row>
        <Col>
          <Button variant="danger" className="btn-small">ORDER ONLINE</Button>
        </Col>
        <Col>
          <Button variant="danger" className="btn-small">OUR MENUS</Button>
        </Col>
      </Row>
    </div>
  </div>
);

export default MiddleImage;
