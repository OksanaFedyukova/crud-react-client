import React from 'react';
import './CitasTables.js';
import Table from 'react-bootstrap/Table';
/* import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; */


class CitasTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

render() {
  return( <Table>
    <thead>
      <tr>
        <th>ID</th>
        <th>fecha</th>
        <th>technology</th>
        <th>coder</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>29 jan 2023</td>
        <td>java script</td>
        <td>Oksana</td>
        <td>any time</td>
      </tr>
     
    </tbody>
  </Table> );
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