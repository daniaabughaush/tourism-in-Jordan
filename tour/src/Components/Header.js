import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
    
      <Navbar style={{ backgroundColor: 'rgba(222, 109, 77, 0.973)'}} variant="dark">
        <Container>
          <Navbar.Brand href="#home">TOUR IN JORDAN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
   
      <br />
      <h1>Welcome to Jordan</h1>
    </>
  );
}

export default ColorSchemesExample;