import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import '../assets/css/formdesign.css'
import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';



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
          <Form.Label><h4>Describe tu formulario</h4></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br/>
        <h4>Preguntas y respuestas</h4>
        <br/>
        <MDBInput wrapperClass='mb-4' id='form9Example1' label='Añade una pregunta' />
        <br/>
        <MDBInput wrapperClass='mb-4' id='form9Example1' label='Respuestas' />
        
      </Form>
      <div class="text-center">
      <MDBBtn floating tag='a' id="addButton">
      <MDBIcon fas icon='plus' />
    </MDBBtn>
   
      
      <br/>
      <Button as="input" type="submit" value="Crear formulario" variant="outline-primary" className="rounded-4" id="enviar"/>
      </div>
    </Container>

            </div>
    )
}