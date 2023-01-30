import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function CardB({formu}) {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/vector-gratis/formulario-documento-linea-acuerdo-digital-contrato-electronico-cuestionario-internet-hacer-lista-tenga-cuenta-boleta-votacion-elemento-diseno-plano-encuesta_335657-2667.jpg"
        />
        <Card.Body>

          <Card.Title>{formu.titulo}</Card.Title>
          <Card.Text>
            {formu.descripcion}
          </Card.Text>

          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
