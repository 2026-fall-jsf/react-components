import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const PizzaToppings = () => {
  //
  // React hooks, useState, useEffect, useNav, b, b, blah...
  //

  //
  // Calculated or derived state, and other helper functions and code...
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
      </Card.Body>
    </Card>
  );

};

// export default PizzaToppings;