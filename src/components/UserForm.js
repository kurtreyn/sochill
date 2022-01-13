import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import blankProfilePic from '../images/blank-profile-pic.png';

export default function UserForm() {
  return (
    <>
      <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 user-form-col">
        <Card>
          <Card.Header className="user-header">
            <h3>User Name</h3>
            <img src={blankProfilePic} alt="profile pic" />
          </Card.Header>
          <Card.Body>
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
