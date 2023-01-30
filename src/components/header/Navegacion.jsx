import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/img/logo.png";

import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="React Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="w-100 d-lg-flex d-flex-column gap-3">
            <Nav className="w-100 justify-content-end gap-3 order-lg-1">

              <Link to="/" className="sm-auto link">
                Home
              </Link>

              <Link to="/todos" className="sm-auto link">
                Ver Formus
              </Link>

              <Link to="/crear" className="sm-auto link">
                Crear Formu
              </Link>

              <Link to="/started" className="sm-auto link">
                Get Started
              </Link>
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
