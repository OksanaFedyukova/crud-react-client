import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function CreateForm() {
  return (
    <div>
      <h3>Create New Appointment</h3>
    <Card border="light">
      <Card.Header as="h6">fecha</Card.Header>
      <Card.Body>
      <Form>

      
      <input type="undefined" placeholder="date" />
      <input type="undefined" placeholder="coder" />
      <input type="undefined" placeholder="technology" />
      <input type="undefined" placeholder="description"  />
    
      </Form>



        <Button variant="light">cancel</Button>{' '}
        <Button type="submit" variant="info">submit</Button>{' '}
      </Card.Body>
      <Card.Footer className="text-muted">see you soon</Card.Footer>
    </Card>
    </div>

  );
} 

export default CreateForm;