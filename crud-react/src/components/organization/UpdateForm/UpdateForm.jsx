import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
render() {
  return(
    <div>
      <h3>Update Your Appointment</h3>
      
    <Card border="light">
      <Card.Header as="h6">fecha</Card.Header>
      <Card.Body>
        <Card.Title>coder</Card.Title>
        <Card.Title>technology</Card.Title>
        <Card.Text>
           description
        </Card.Text>
        <Button variant="light">cancel</Button>{' '}
      <Button variant="info">submit</Button>{' '}
      </Card.Body>
      <Card.Footer className="text-muted">see you soon</Card.Footer>
    </Card>
    </div>

  );
} 
}
export default UpdateForm;