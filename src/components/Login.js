import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/dashboard');
    } catch {
      setError('failed to log in');
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" placeholder="email">
              <Form.Control
                type="email"
                placeholder="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password" className="mt-2">
              <Form.Control
                type="password"
                placeholder="password"
                ref={passwordRef}
                required
              />
            </Form.Group>

            <Button
              disabled={loading}
              className="w-100 mt-2 btn-log-in"
              type="submit"
            >
              log in
            </Button>
            <Link to="/signup">
              <Button className="w-100 mt-2 btn-sign-up">sign up</Button>
            </Link>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <Link to="/forgot-password">forgot password?</Link>
          <p>
            Need an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </Card>
    </>
  );
}
