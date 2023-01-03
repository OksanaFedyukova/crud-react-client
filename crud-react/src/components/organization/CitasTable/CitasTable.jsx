import React from 'react';
import './CitasTables.js';
import Table from 'react-bootstrap/Table';
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
  <Card>
    <Card.Header>
    <Link to={"/create:app"}> <Button variant="success"> create new appointment</Button></Link>
    </Card.Header>
    <Card.Body>
   <h1>all my appointments</h1> 
    <Table>
    <thead>
      <tr>
        <th>ID</th>
        <th>fecha</th>
        <th>technology</th>
        <th>coder</th>
        <th>description</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

  {citas.map((cita)=>(
      <tr key={cita.id}>
        <td>{cita.id}</td>
        <td>{cita.fecha}</td>
        <td>{cita.technology}</td>
        <td>{cita.coder} </td>
        <td>{cita.description}</td>
        <td>
           <ButtonGroup size="sm">
           <Link to={"/update:app"}> <Button variant="warning"> + edit</Button></Link> 
             <Button variant="danger">delete</Button>{' '}
            </ButtonGroup>
         </td>
    
      </tr>
  )
)

}
    </tbody>
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