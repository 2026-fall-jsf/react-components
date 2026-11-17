import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const dummyPizzaToppingsFromApi = [
  {
    name: "Pepperoni",
    price: 3.50,
  },
  {
    name: "Sausage",
    price: 4.25,
  },
  {
    name: "Extra cheese",
    price: 0.99,
  },
]

export const PizzaToppings = () => {
  //
  // React hooks, useState, useEffect, useNav, ...
  //
  const [availablePizzaToppings, setAvailablePizzaToppings] = useState(
    dummyPizzaToppingsFromApi.map(
      x => (
        {
          ...x,
          checked: false,
        }
      )
    )
  );

  // This is bad because you don't need to have a starting value for a total that is calculated (duplicated state)
  // const [total, setTotal] = useState(0);

  //
  // Calculated or derived state, and other helpful functions and code...
  //
  const total = availablePizzaToppings

  .filter(
    x => x.checked
  )
  .reduce(
    (acc, x) => acc + x.price,
      0,
  )

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
          className="d-flex flex-row gap-2 pb-3"
        >
          <Button
            variant="outline-primary"
            onClick={
              () => setAvailablePizzaToppings(
                availablePizzaToppings.map(
                  x => (
                    {
                      ...x,
                      checked: true,
                    }
                  )
                )
              )
            }
          >
            All
          </Button>
          <Button
            variant="outline-secondary"
            onClick={
              () => setAvailablePizzaToppings(
                availablePizzaToppings.map(
                  x => (
                    {
                      ...x,
                      checked: false,
                    }
                  )
                )
              )
            }
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
          Total: ${ total.toFixed(2) }
        </h4>

      </Card.Body>
    </Card>
  );
};

// export default PizzaToppings;