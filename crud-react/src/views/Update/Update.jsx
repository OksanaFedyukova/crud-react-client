
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UpdateForm from '../../components/organization/UpdateForm/UpdateForm';

function Update() {
    return (
        <>
    
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">OF &#169;</Navbar.Brand>
          <Nav className="me-auto">
           
            <Nav.Link href="#">our team</Nav.Link>
            <Nav.Link href="/crear">Create New</Nav.Link>
            <Nav.Link href="/">my appointments</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='container'>
      <h2>Modern Problems Require Modern Solutions</h2>

       <UpdateForm/>
       </div>
       </>
 );
}

export default Update;