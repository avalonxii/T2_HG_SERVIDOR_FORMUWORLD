import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FormularioContext } from "../../context/FormularioContext";

export default function Opcion({}) {
  const { initialSegmentos, setSegmentos, segmentos } = useContext(FormularioContext);
  const { opciones, correcta } = initialSegmentos;

  const [texto, setTexto] = useState("")

  const handlerChangeText = (e) => {
    setTexto(e.target.value)
    initialSegmentos.opciones.push(texto)
  };

  return (
    <InputGroup className="mb-4">
      <Form.Check type="checkbox">
        <Form.Check.Input
          type="checkbox"
          isValid
          className="p-3 m-1"
          /* onChange={handlerChangeCheck} */
        />
      </Form.Check>
      <Form.Control
        aria-label="Text input with radio button"
        onChange={handlerChangeText}
      />
      <Button variant="danger" onClick={() => console.log(initialSegmentos)}>
        X
      </Button>
    </InputGroup>
  );
}
