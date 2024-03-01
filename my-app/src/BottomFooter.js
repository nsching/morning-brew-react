import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const BottomFooter = () => (
  <footer>
    <Container>
      <Row className="justify-content-center py-3">
        <Col className="text-center">
          <p>MORNING BREW KAILUA</p>
          <p>600 Kailua Rd, Kailua, HI 96734</p>
          <p>(808) 262-7770</p>
          <p>mb.crew22@gmail.com</p>
        </Col>
        <Col className="text-center">
          <p>MORNING BREW KAKA'AKO</p>
          <p>685 Auahi St #113 Honolulu, HI 96813</p>
          <p>(808) 369-3444</p>
          <p>mbkakaako@gmail.com</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default BottomFooter;
