
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CreateForm from '../../components/organization/CreateForm/CreateForm';

function Create() {
    return (
        <>
    
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">OF &#169;</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">our team</Nav.Link>
            <Nav.Link href="/create:app">create new</Nav.Link>
            <Nav.Link href="/">my appointments</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='container'>
      <h2>Modern Problems Require Modern Solutions</h2>

       <CreateForm/>
       </div>
       </>
 );
}

export default Create;