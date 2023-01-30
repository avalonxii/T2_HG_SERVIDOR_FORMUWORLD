import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default function CabeceraFormu() {
  return (
    <Container className="border border-5 rounded-4 mt-5 p-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>
          {" "}
          <h2>Titulo</h2>{" "}
        </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          <h2>Descripción</h2>
        </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Container>
  );
}
