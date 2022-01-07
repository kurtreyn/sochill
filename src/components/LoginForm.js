import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function LoginForm() {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
      <h2>Sign Up or Sign In</h2>
      <Form>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
          />
        </FormGroup>{' '}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>{' '}
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
