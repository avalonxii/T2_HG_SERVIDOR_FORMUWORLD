import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Pregunta from "./Pregunta";
import { useState, useContext } from "react";
import { FormularioContext } from "../../context/FormularioContext";

export default function CrearPreguntas() {

  

  const [numeroPreguntas, setnumeroPreguntas] = useState([]);

  //añade las preguntas generadas al array de preguntas para luego mostarlo
  const handlerClickCreateFormu = () => {
    setnumeroPreguntas([...numeroPreguntas, <Pregunta />]);
  };

  return (
    <>
      { //muestra las preguntas en el array de preguntas 
      numeroPreguntas.map((pregunta) => pregunta)}

      <Pregunta />

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
