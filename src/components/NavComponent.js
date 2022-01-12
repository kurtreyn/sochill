import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import navLogo from '../images/logo-sochill.png';

export default function NavComponent() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/');
    } catch {
      setError('failed to log out');
    }
  }
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
              <Nav.Link href="" onClick={handleLogout}>
                log out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
