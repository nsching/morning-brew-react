import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './style.css';

const TopMenu = () => (
  <Navbar bg="light">
    <Container>
      <Nav className="mx-auto">
        <Nav.Item className="border-1 border-top border-dark">
          <Nav.Link href="#" className="nav-link" active>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">
          <Nav.Link href="#" className="nav-link">Order Online</Nav.Link>
        </Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">
          <Nav.Link href="#" className="nav-link">Menus</Nav.Link>
        </Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">
          <Nav.Link href="#" className="nav-link">Locations</Nav.Link>
        </Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">
          <Nav.Link href="#" className="nav-link">About</Nav.Link>
        </Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">
          <Nav.Link href="#" className="nav-link">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">
          <Nav.Link href="#" className="nav-link">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
