import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupForm(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/dashboard');
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('email already in use. try logging in');
          break;
        case 'auth/invalid-email':
          setError('email address is invalid');
          break;
        case 'auth/operation-not-allowed':
          setError('error during signup');
          break;
        case 'auth/weak-password':
          setError(
            'Password is not strong enough. Add additional characters including special characters and numbers.'
          );
          break;
        default:
          console.log(err.message);
          setError('failed to create an account');
          break;
      }
    }
    setLoading(false);
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
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

          <Form.Group id="password-confirm" className="mt-2">
            <Form.Control
              type="password"
              placeholder="password confirmation"
              ref={passwordConfirmRef}
              required
            />
          </Form.Group>
          <Button disabled={loading} className="w-100 mt-2" type="submit">
            sign up
          </Button>
        </Form>
        <div className="w-100 text-center mt-2">
          <p>
            Already have an account? <Link to="/login">log in</Link>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

render(<App />);
