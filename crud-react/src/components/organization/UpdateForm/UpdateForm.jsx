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
  
    <Card border="light">
      <Card.Header as="h6">Update Your Appointment</Card.Header>
      <Card.Body>
      
    <form >
      <input type="undefined" placeholder="date" />
      <input type="undefined" placeholder="coder" />
      <input type="undefined" placeholder="technology" />
      <input type="undefined" placeholder="description"  />

    
    </form>

        <Button variant="light">cancel</Button>{' '}
        <Button  type="submit" variant="info">submit</Button>{' '}
      </Card.Body>
      <Card.Footer className="text-muted">see you soon</Card.Footer>
    </Card>
    </div>

  );
} 
}
export default UpdateForm;