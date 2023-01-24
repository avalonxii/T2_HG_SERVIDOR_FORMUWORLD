import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from '../assets/img/logo.png'

function BarraNavegacion() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={Logo} alt="React Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
        <Container className="d-flex w-75">
          <Form className="w-75">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
          <Nav className="w-100 d-flex justify-content-end">
            <Button href="#" variant="outline-secondary"  
            className="sm-auto">
              Filtro
            </Button>
            <Button href="#" variant="outline-primary">
              Get Started
            </Button>
          </Nav>
        </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;

/*function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container sm style={{paddingRight:100,paddingLeft:100}} >
        <Navbar.Brand href="#" className='w-25'>FormuWorld</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="w-25 me-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="m-2"
              aria-label="Search"
            />
          </Form>
          <Nav className='w-50'>
          <Button href='#' variant='outline-secondary'>Filtro</Button>
          </Nav>
          <Nav>
            <Button href='#' variant='outline-primary'>Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}*/
