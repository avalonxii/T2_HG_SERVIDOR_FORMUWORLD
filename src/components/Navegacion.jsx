import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid >
        <Navbar.Brand href="#">FormuWorld</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Container className="d-flex " >
          <Form className="w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
          <Nav >
            <Button href="#" variant="outline-secondary">
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

export default NavScrollExample;

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
