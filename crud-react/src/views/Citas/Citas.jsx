
import CitasTables from '../../components/organization/CitasTable/CitasTable';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Citas() {
    return (
        <>
        {/* <Navbar/> */}
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">OF &#169;</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/team">our team</Nav.Link>
            <Nav.Link href="/create:app">create New</Nav.Link>
            <Nav.Link href="/">my appointments</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='container'>
      <h2>Modern Problems Require Modern Solutions</h2>
       <CitasTables/>
       </div>
       </>
 );
}

export default Citas;