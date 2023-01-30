import Opcion from "./Opcion";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";

export default function Preguntas() {
  const [numeroOpciones, setnumeroOpciones] = useState([]);

  const handlerClickCreateOption = () => {
    setnumeroOpciones([...numeroOpciones, <Opcion />]);
  };

  return (
    <Container className="border border-5 rounded-4 mt-5 p-3" id="container">
      <Form.Group
        className="mb-3 w-100"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>
          <h4>Añade una pregunta: </h4>
        </Form.Label>
        <Form.Control type="text" placeholder="Escribe tu pregunta" />
        <hr />
      </Form.Group>

      {/* <InputGroup className="mb-4"> */}
        <Form.Control type="text" className="mb-4" placeholder="1." />

        <Form.Control type="text" className="mb-4" placeholder="2." />

        <Form.Control type="text" placeholder="3." />
      {/* </InputGroup> */}

    </Container>
  );
}
