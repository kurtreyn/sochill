import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import navLogo from '../images/logo-sochill.png';

export default function NavComponent(props) {
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
              <Button variant="link" onClick={props.handleLogout}>
                log out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
