import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

export const PizzaToppings = () => {
  //
  // React hooks, useState, useEffect, useNav, ...
  //

  //
  // Calculated or derived state, and other helpful functions and code...
  //

  //
  // Return the jsx...
  //
  return (
    <Card
      className="mb-3"
    >
      <Card.Body>
        <Card.Title>
          Choose pizza toppings...
        </Card.Title>
        <div
          className="d-flex flex-row gap-2"
        >
          <Button
            variant="outline-primary"
          >
            All
          </Button>
          <Button
            variant="outline-secondary"
          >
            None
          </Button>
        </div>

        <Form>
          <div className="mb-3">
            <Form.Check
              label="Pepperoni ($2.33)"
            />
          </div>
        </Form>
        <h4
          className="mb-3"
        >
          Total: $9.99
        </h4>

      </Card.Body>
    </Card>
  );
};

// export default PizzaToppings;