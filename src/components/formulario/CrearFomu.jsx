import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import CabeceraFormu from "./CabeceraFormu";
import Pregunta from "./Pregunta";
import Button from "react-bootstrap/Button";

import { FormuContext } from "../../context/FormuContext";
import { useContext, useEffect, useMemo } from "react";

import { addUser } from "../../service/api";

function Agregar() {
  const { formu, guardar, setGuardar } = useContext(FormuContext);

  useMemo(() => guardar, [])

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setGuardar(true);
  };

  useEffect(() => {
    addUser(formu)
  }, [guardar]);

  return (
    <Container>
      <Form className="mt-5" onSubmit={handlerSubmit}>
        <button
          type="submit"
          disabled
          className="none"
          aria-hidden="true"
        ></button>
        {/* para deshabilitar el envio con enter */}

        <CabeceraFormu />

        <Pregunta />

        <Container className="mt-4 mb-4 d-flex justify-content-center">
          <Button type="submit">Crear Formulario</Button>
        </Container>
      </Form>
    </Container>
  );
}

export default Agregar;
