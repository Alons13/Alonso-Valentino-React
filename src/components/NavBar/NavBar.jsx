import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget'
import { Link } from "react-router-dom"
//me-auto
function Navbar1() {
  return (
    <>
    
      <Navbar  className='flex justify-between items-center mx-auto ' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
          <h1 className='w-full text-3xl font-bold p-4 text-black ' >
            E-Commerce
          </h1>
          </Navbar.Brand>
          
          <Nav className="">
            <Nav.Link className='flex p-4 text-3xl text-black ' as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link className='flex p-4 text-3xl text-black ' as={Link} to="/category/1">MotherBoards</Nav.Link>
            <Nav.Link className='flex p-4 text-3xl text-black ' as={Link} to="/category/2">Procesadores</Nav.Link>
          
          </Nav>
            <Link className='text-3xl' to='/card'>
              <CardWidget></CardWidget>
            </Link>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbar1;