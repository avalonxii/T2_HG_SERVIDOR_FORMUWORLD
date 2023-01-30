import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import CabeceraFormu from "./CabeceraFormu";
import Button from "react-bootstrap/Button";

import { FormuContext } from "../../context/FormuContext";
import { useContext, useRef } from "react";

import { addFormu } from "../../service/api";

function Agregar() {
  const { formu } = useContext(FormuContext);


  //pregunta
  const p1 = useRef();

  //respuesta
  const o1 = useRef();
  const o2 = useRef();
  const o3 = useRef();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    formu.seccion = {
      pregunta: p1.current.value,
      opciones: [o1.current.value, o2.current.value, o3.current.value],
    };

    addFormu(formu);
    

  };

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

        <Container
          className="border border-5 rounded-4 mt-5 p-3 light"
          id="container"
        >
          <Form.Group
            className="mb-3 w-100"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>
              <h4>Añade una pregunta: </h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe tu pregunta"
              ref={p1}
            />
            <hr />
          </Form.Group>

          <Form.Control
            type="text"
            className="mb-4"
            placeholder="1."
            ref={o1}
          />

          <Form.Control
            type="text"
            className="mb-4"
            placeholder="2."
            ref={o2}
          />

          <Form.Control type="text" placeholder="3." ref={o3} />
        </Container>

        <Container className="mt-4 mb-4 d-flex justify-content-center">
          <Button type="submit">Crear Formulario</Button>
        </Container>
      </Form>
    </Container>
  );
}

export default Agregar;
