import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export const PizzaToppings = () => {
  //
  // React hooks, useState, useEffect, useNav, b, b, blah...
  //

  //
  // Calculated or dervied state, and other helpers functions and code...
  //

  //
  // Return the jsx...
  //
  return (
    <Card
      className='mb-3'
    >
      <Card.Body>
        <Card.Title>
          Choose pizza toppings...
        </Card.Title>
        <div
          className='d-flex flex-row gap-2 mb-3'
        >
          <Button
            variant='outline-primary'
          >
            All
          </Button>
          <Button
            variant='outline-secondary'
          >
            None
          </Button>
        </div>
        <Form
          className='mb-3'
        >
          <Form.Check 
            label="Pepperoni ($2.33)"
          />
        </Form>
        <h4>
          Total: $9.99
        </h4>
      </Card.Body>
    </Card>
  );
};

// export default PizzaToppings;