import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";

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
    name: "Extra Cheese",
    price: 0.99,
  }
]

export const PizzaToppings = () => {
  //
  // React hooks, useState, useEffect, useNav, b, b, blah...
  //

  const [availablePizzaToppings, setAvaliablePizzaToppings] = useState(
    dummyPizzaToppingsFromApi.map(
      x => (
        {
          ...x,
          checked: true,
        }
      )
    )
  );

  //
  // Calculated or derived state, and other helper functions and code...
  //
const total = availablePizzaToppings
  .filter(
    x => x.checked
  )
  .reduce(
    (acc, x) => acc + x.price,
    0,
  )
;
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
          className="d-flex flex-row gap-2 mb-3"
        >
          <Button
            variant="outline-primary"
            onClick={
              () => setAvaliablePizzaToppings(
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
              () => setAvaliablePizzaToppings(
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
        <Form
          className="mb-3"
        >
          <Form.Check 
            label="Pepperoni ($2.33)"
          />
        </Form>
        <h4>
          Total: ${ total.toFixed(2) }
        </h4>
      </Card.Body>
    </Card>
  );

};

// export default PizzaToppings;