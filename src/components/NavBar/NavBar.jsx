import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget'
import { Link } from "react-router-dom"

function Navbar1() {
  return (
    <>
 
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/category/1">MotherBoards</Nav.Link>
            <Nav.Link as={Link} to="/category/2">Procesadores</Nav.Link>
            <Nav.Link as={Link} to="/card">Card</Nav.Link>
            <Link to='/card'>
              <CardWidget></CardWidget>
            </Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbar1;