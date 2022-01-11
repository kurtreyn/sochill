import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import navLogo from '../images/logo-sochill.png';

export default function NavComponent() {
  return (
    <>
      <Navbar className="custom-nav">
        <Container>
          <Navbar.Brand href="#home">
            <img src={navLogo} className="nav-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">home</Nav.Link>
              <Nav.Link href="#link">logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
