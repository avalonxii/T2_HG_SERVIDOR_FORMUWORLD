import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Preguntas from "./Preguntas";
import { useState } from "react";

export default function CrearPreguntas() {
  const [numeroPreguntas, setnumeroPreguntas] = useState([]);

  const handlerClickCreateFormu = () => {
    setnumeroPreguntas([...numeroPreguntas, <Preguntas />]);
  };

  return (
    <>
      {numeroPreguntas.map((pregunta) => pregunta)}

      <Preguntas />

      <Container className="d-flex justify-content-center pt-5">
        <Button
          as="input"
          type="submit"
          value="Crear Pregunta"
          variant="outline-primary"
          id="enviar"
          style={{
            display: `${numeroPreguntas.length < 3 ? "block" : "none"}`,
          }}
          onClick={handlerClickCreateFormu}
        />
      </Container>
    </>
  );
}
