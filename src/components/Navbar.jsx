import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function navbar_page() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary- barrita">
      <Container>
        <Navbar.Brand href="/">ELOTE DEPRESIVO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/informacion">Informacion</Nav.Link>
            <Nav.Link href="/administracion">Administracion</Nav.Link>
            <Nav.Link href="/tienda">Tienda</Nav.Link>
            <NavDropdown title="Usuario" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">Registro</NavDropdown.Item>
              <NavDropdown.Item href="/loginadminpage">Login Admin</NavDropdown.Item>
              <NavDropdown.Item href="/">Login User</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar_page;
