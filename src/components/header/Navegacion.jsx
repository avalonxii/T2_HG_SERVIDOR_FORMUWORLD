import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/img/logo.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="React Logo" />
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="w-100 d-lg-flex d-flex-column gap-3">
    
            <Nav className="w-100 justify-content-end gap-3 order-lg-1">
              <Button href="#" variant="outline-secondary" className="sm-auto">
                Crear Formu
              </Button>
              <Button href="#" variant="outline-secondary">
                Filtro
              </Button>
              <Button href="#" variant="outline-primary">
                Get Started
              </Button>
            </Nav>

            <Form className="w-100 ">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="mt-3 mt-lg-0"
              />
            </Form>

          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
