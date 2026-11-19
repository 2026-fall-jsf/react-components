import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
    name: "Extra Cheese",
    price: 0.99,
  },
  {
    name: "Mushrooms",
    price: 1.75,
  },
  {
    name: "Green Peppers",
    price: 1.25,
  },
  {
    name: "Black Olives",
    price: 1.50,
  },
  {
    name: "Pineapple",
    price: 2.00,
  },
];

export const PizzaToppings = () => {
  //
  // React hooks, useState, useEffect, useNav, b, b, blah...
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

  // bad, bad, bad, duplicated state, squint ! ! !
  // const [total, setTotal] = useState(0);

  // EXERCISE #1 - duplicated state, derive it instead
  const [selectedCount] = useState(0);

  // EXERCISE #2 - duplicated state, derive it instead
  const [hasSelection] = useState(false);

  // EXERCISE #3 - duplicated state, derive it instead
  const [allSelected] = useState(false);

  // EXERCISE #4 - duplicated state, derive it instead
  const [selectedNames] = useState("");

  // EXERCISE #5 - duplicated state, derive it instead
  const [unselectedNames] = useState(
    dummyPizzaToppingsFromApi.map(x => x.name).join(", ")
  );

  // EXERCISE #6 - duplicated state, derive it instead
  const [cheapestPrice] = useState(0);

  // EXERCISE #7 - duplicated state, derive it instead
  const [mostExpensivePrice] = useState(0);

  // EXERCISE #8 - duplicated state, derive it instead
  const [averagePrice] = useState(0);

  // EXERCISE #9 - duplicated state, derive it instead (tax rate 8.25%)
  const [tax] = useState(0);

  // EXERCISE #10 - duplicated state, derive it instead (total plus 8.25% tax)
  const [totalWithTax] = useState(0);

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
        <Form
          className="mb-3"
        >
          {
            availablePizzaToppings.map(
              x => (
                <Form.Check 
                  key={x.name}
                  id={x.name}
                  label={`${x.name} ($${x.price.toFixed(2)})`}
                  checked={x.checked}
                  onChange={
                    () => setAvailablePizzaToppings(
                      availablePizzaToppings.map(
                        y => (
                          {
                            ...y,
                            checked: y === x
                              ? !y.checked
                              : y.checked 
                          }
                        )
                      )
                    )
                  }
                />
              )
            )
          }
        </Form>
        <h4>
          Total: ${ total.toFixed(2) }
        </h4>
        <ul>
          <li>Selected count: {selectedCount}</li>
          <li>Has selection: {hasSelection ? "yes" : "no"}</li>
          <li>All selected: {allSelected ? "yes" : "no"}</li>
          <li>Selected: {selectedNames}</li>
          <li>Not selected: {unselectedNames}</li>
          <li>Cheapest: ${cheapestPrice.toFixed(2)}</li>
          <li>Most expensive: ${mostExpensivePrice.toFixed(2)}</li>
          <li>Average: ${averagePrice.toFixed(2)}</li>
          <li>Tax: ${tax.toFixed(2)}</li>
          <li>Total with tax: ${totalWithTax.toFixed(2)}</li>
        </ul>
      </Card.Body>
    </Card>
  );

};

// export default PizzaToppings;