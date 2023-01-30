import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default function GetStarted() {
  return (
    <Container className="w-50 border border-5 rounded-4 mt-5 p-3 light">
      <Form>
        <h3>LOG IN</h3>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        

        <Button variant="primary" type="submit">
          Start
        </Button>

      </Form>
    </Container>
  );
}
