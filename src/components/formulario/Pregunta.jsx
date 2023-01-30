import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useContext, useEffect, useRef } from "react";
import { FormuContext } from "../../context/FormuContext";

export default function Preguntas() {
  
  //pregunta
  const p1 = useRef()

  //respuesta
  const o1 = useRef()
  const o2 = useRef()
  const o3 = useRef()

  const { formu, guardar } = useContext(FormuContext); 

  useEffect(() => {
    
    formu.seccion = {pregunta:p1.current.value ,opciones:[o1.current.value, o2.current.value, o3.current.value]}

  }, [guardar])
  

  return (
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
        <Form.Control type="text" placeholder="Escribe tu pregunta" ref={p1}/>
        <hr />
      </Form.Group>

      <Form.Control type="text" className="mb-4" placeholder="1." ref={o1}/>

      <Form.Control type="text" className="mb-4" placeholder="2." ref={o2}/>

      <Form.Control type="text" placeholder="3." ref={o3}/>
    </Container>
  );
}
