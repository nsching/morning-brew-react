import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Logo = () => (
  <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://courses.ics.hawaii.edu/ics314s24/morea/ui-frameworks/morning-brew-hawaii-logo-black.png"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Logo;
