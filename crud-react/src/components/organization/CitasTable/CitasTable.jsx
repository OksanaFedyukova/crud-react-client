import React from 'react';
import './CitasTables.scss';
//import Table from 'react-bootstrap/Table';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card'; 
import {Link} from 'react-router-dom';


class CitasTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datosCargados:false,
    citas:[]
    }
  }

  cargarDatos(){
   fetch("http://localhost/citas/")
  .then(respuesta=>respuesta.json())
  .then((datosRespuesta)=> {
    console.log(datosRespuesta);
  this.setState({datosCargados:true, citas:datosRespuesta})
  })
  .catch(console.log)
  }
  componentDidMount(){
    this.cargarDatos();
  }

render() {

const{datosCargados, citas}=this.state 
 if (!datosCargados) {
  return(<div>Downloading.....</div>);
 }
 else{


  return( 
  <>
  <h3>All My Appointments</h3> 
  <Card id="cardTable">
    <Card.Header>
    <Link to={"/create:app"}> <Button variant="success" id="btnCreate"> create new appointment</Button></Link>
    </Card.Header>
    <Card.Body>
    <Table >
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>fecha</Th>
        <Th>technology</Th>
        <Th>coder</Th>
        <Th>description</Th>
        <Th></Th>
      
      </Tr>
    </Thead>
    <Tbody id="tblLista">

  {citas.map((cita)=>(
      <Tr key={cita.id}>
        <Td>{cita.id}</Td>
        <Td>{cita.fecha}</Td>
        <Td>{cita.technology}</Td>
        <Td>{cita.coder} </Td>
        <Td>{cita.description}</Td>
       
        <Td>
           <ButtonGroup size="sm">
           <Link to={"/update:app"}> <Button variant="warning" id="btnEdit"> + edit</Button></Link> 
             <Button id="btnDelete" variant="danger">delete</Button>{' '}
            </ButtonGroup>
            <Td><h6>{cita.created}</h6></Td>
         </Td>
    
      </Tr>
  )
)

}
    </Tbody>
  </Table> 
    </Card.Body>
  </Card>
 
  </>);
}
}
}
export default CitasTable;



/* function CitasTables() {
  return (
    <div>
  
    <Card border="light">
      <Card.Header as="h6">fecha</Card.Header>
      <Card.Body>
        <Card.Title>coder</Card.Title>
        <Card.Title>technology</Card.Title>
        <Card.Text>
           description
        </Card.Text>
        <Button variant="info">+  edit</Button>{' '}
      <Button variant="warning">delete</Button>{' '}
      </Card.Body>
      <Card.Footer className="text-muted">see you soon</Card.Footer>
    </Card>
    </div>

  );
} 

export default CitasTables;*/