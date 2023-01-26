import Opcion from "./Opcion";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function Preguntas() {

  const [numeroOpciones, setnumeroOpciones] = useState([]);
    
  const handlerClickCreateOption = () => {
    setnumeroOpciones([...numeroOpciones, <Opcion />])
  };

  return (
    <Container className="border border-5 rounded-5 mt-5 pb-5" id="container">
      <Form className="mt-5 d-flex justify-content-center">
        <Form.Group
          className="mb-3 w-100"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>
            <h4>Añade una pregunta: </h4>
          </Form.Label>
          <Form.Control type="text" />
          <hr />
        </Form.Group>
      </Form>

      <Container>
      {numeroOpciones.map((opcion) => opcion)}
      </Container>

      <Container className="d-flex justify-content-center mt-5">
        <Button
          as="input"
          type="submit"
          value="añadir opcion"
          variant="outline-primary"
          id="enviar"
          style={{
            display: `${numeroOpciones.length < 6 ? "block" : "none"}`,
          }}
          onClick={handlerClickCreateOption}
        />
      </Container>
    </Container>
  );
}
