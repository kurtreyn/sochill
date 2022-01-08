import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

// https://youtu.be/PKwu15ldZ7k?t=674

export default function LoginForm() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>email</Form.Label>
              <Form.Control type="email" ref="" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref="" required />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>password confirmation</Form.Label>
              <Form.Control type="password" ref="" required />
            </Form.Group>
            <Button className="w-100" type="submit">
              sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <p>Already have an account? Log In</p>
      </div>
    </>
  );
}
