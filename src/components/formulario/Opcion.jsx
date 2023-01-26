import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Opcion({}) {

  const [isDelete, setisDelete] = useState(false)
  const [isCorrecto, setIsCorrecto] = useState(false)

  const [pregunta, setPregunta] = useState("")
  const [respuesta, setRespuesta] = useState(null)
  
  const handlerChangeText = (e) => {
    setPregunta(e.target.value);
  }

  const handlerChangeCheck = () => {

    setIsCorrecto(!isCorrecto)
    isCorrecto? setRespuesta(pregunta) : setRespuesta("")

    console.log(isCorrecto);
    console.log(respuesta);
  }

  return (
    <InputGroup className="mb-4">
        <Form.Check type="checkbox" >
          <Form.Check.Input type="checkbox" isValid className="p-3 m-1" onChange={handlerChangeCheck}/>
        </Form.Check>
      <Form.Control
        aria-label="Text input with radio button"
        onChange={handlerChangeText}
      />
      <Button variant="danger" onClick={ () => setisDelete(!isDelete)}>
        X
      </Button>
    </InputGroup>
  );
}
