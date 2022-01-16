import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import SideDock from './SideDock';
import NavComponent from './NavComponent';
import UserForm from './UserForm';
import FeedComponent from './FeedComponent';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch {
      setError('failed to log out');
    }
  }
  return (
    <>
      <NavComponent />

      <div className="container-fluid">
        <div className="row user-row">
          <UserForm />
        </div>
        <div className="row news-feed"></div>
      </div>

      {/* <Container>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>email:</strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              update profile
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            log out
          </Button>
        </div>
      </Container> */}
    </>
  );
}
