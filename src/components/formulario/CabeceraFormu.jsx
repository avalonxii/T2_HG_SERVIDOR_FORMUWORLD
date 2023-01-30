import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { FormuContext } from "../../context/FormuContext";

export default function CabeceraFormu() {

  const { formu } = useContext(FormuContext);

  return (
    <Container className="border border-5 rounded-4 mt-5 p-3 light">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>
          <h3>Titulo</h3>
        </Form.Label>
        <Form.Control type="text" onChange={e => formu.titulo=e.target.value}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          <h4>Descripción</h4>
        </Form.Label>
        <Form.Control as="textarea" rows={3} onChange={e => formu.descripcion=e.target.value}/>
      </Form.Group>
    </Container>
  );
}
