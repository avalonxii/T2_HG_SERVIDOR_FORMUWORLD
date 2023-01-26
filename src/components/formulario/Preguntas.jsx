import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Opcion from "./Opcion";
import { useRef } from "react";





export default function Preguntas() {

  const opciones = useRef(null);


  const handlerClickCreateOption = () => {
    console.log(opciones);
  }


  const handlerClickCreateFormu = () => {


  }


  return (
    <>
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

        <Container ref={opciones}>
          <Opcion />
          <Opcion />
        </Container>

        <Container className="d-flex justify-content-center mt-5">
          <Button
            as="input"
            type="submit"
            value="añadir opcion"
            variant="outline-primary"
            id="enviar"
            onClick={handlerClickCreateOption}
          />
        </Container>
      </Container>

      <Container className="d-flex justify-content-center pt-5">
        <Button
          as="input"
          type="submit"
          value="Crear formulario"
          variant="outline-primary"
          id="enviar"
          onClick={handlerClickCreateFormu}
        />
      </Container>
    </>
  );
}
