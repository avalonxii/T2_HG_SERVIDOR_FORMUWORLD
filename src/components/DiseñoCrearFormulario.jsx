import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import '../assets/css/formdesign.css'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';



export default function DiseñoCrearFormulario(){

    return(
        <div>
            <h1>Crea tu propio formulario</h1>
            
        <Container className="border border-5 rounded-5 mt-5" id="container">
      <Form className="mt-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label> <h4>Título</h4> </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label><h4>Descripción</h4></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br/>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label><h4>Añade una pregunta: </h4></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <br/>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label><h5>Respuestas</h5></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form>
      <MDBBtn floating tag='a'>
      <MDBIcon fas icon='plus' />
    </MDBBtn>
      <br/>
      <Button as="input" type="submit" value="Crear formulario" variant="outline-primary" className="rounded-4" id="enviar"/>
    </Container>
            </div>
    )
}