import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import CabeceraFormu from "./CabeceraFormu";
import Pregunta from "./Pregunta";
import Button from "react-bootstrap/Button";

function Agregar() {
  return (
    <Container>
      <Form className="mt-5">
        <button
          type="submit"
          disabled
          className="none"
          aria-hidden="true"
        ></button>{/* para deshabilitar el envio con enter */}
        
        <CabeceraFormu />
        
        <Pregunta />

        <Container className="mt-4 mb-4 d-flex justify-content-center">
          <Button>Crear Formulario</Button>
        </Container>

      </Form>
    </Container>
  );
}

export default Agregar;
