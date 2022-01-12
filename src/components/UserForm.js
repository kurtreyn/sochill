import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export default function UserForm() {
  return (
    <>
      <div className="col col-sm-12 col-md-10 col-lg-10 col-xl-10 user-form-col">
        <Card>
          <Card.Body>
            {/* <h2 className="text-center mb-4">Log In</h2> */}

            <Form onSubmit="">
              <Form.Group id="post">
                <Form.Control type="post" placeholder="make a post" />
              </Form.Group>

              <Button className="mt-2" type="submit">
                post
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
