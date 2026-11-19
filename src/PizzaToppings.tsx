import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const dummyPizzaToppingsFromApi = [
  {
    name: "Black Olives",
    price: 1.50,
  },
  {
    name: "Extra Cheese",
    price: 0.99,
  },
  {
    name: "Green Peppers",
    price: 1.25,
  },
  {
    name: "Mushrooms",
    price: 1.75,
  },
  {
    name: "Pepperoni",
    price: 3.50,
  },
  {
    name: "Pineapple",
    price: 2.00,
  },
  {
    name: "Sausage",
    price: 4.25,
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


  // EXERCISE #2 - duplicated state, derive it instead
  const [hasSelection, setHasSelection] = useState(false);

  // EXERCISE #3 - duplicated state, derive it instead
  const [allSelected, setAllSelected] = useState(false);

  // EXERCISE #4 - duplicated state, derive it instead
  const [selectedNames, setSelectedNames] = useState("");

  // EXERCISE #5 - duplicated state, derive it instead
  const [unselectedNames, setUnselectedNames] = useState(
    dummyPizzaToppingsFromApi.map(x => x.name).join(", ")
  );

  // EXERCISE #6 - duplicated state, derive it instead
  const [cheapestPrice, setCheapestPrice] = useState(0);

  // EXERCISE #7 - duplicated state, derive it instead
  const [mostExpensivePrice, setMostExpensivePrice] = useState(0);

  // EXERCISE #8 - duplicated state, derive it instead
  const [averagePrice, setAveragePrice] = useState(0);

  // EXERCISE #9 - duplicated state, derive it instead (tax rate 8.25%)
  const [tax, setTax] = useState(0);

  // EXERCISE #10 - duplicated state, derive it instead (total plus 8.25% tax)
  const [totalWithTax, setTotalWithTax] = useState(0);

  //
  // Calculated or derived state, and other helper functions and code...
  //
  const updateToppings = (newPizzaToppingsState: typeof availablePizzaToppings) => {

    setAvailablePizzaToppings(newPizzaToppingsState);
    
    const newChecked = newPizzaToppingsState.filter(
      x => x.checked
    );

    const newCheckedPrices = newChecked.map(
      x => x.price
    );

    const newTotal = newCheckedPrices.reduce(
      (acc, p) => acc + p, 
      0,
    );

    // EXERCISE #2 - delete the state above and this line
    setHasSelection(newChecked.length > 0);

    // EXERCISE #3 - delete the state above and this line
    setAllSelected(newChecked.length === newPizzaToppingsState.length);

    // EXERCISE #4 - delete the state above and this line
    setSelectedNames(newChecked.map(x => x.name).join(", "));

    // EXERCISE #5 - delete the state above and this line
    setUnselectedNames(newPizzaToppingsState.filter(x => !x.checked).map(x => x.name).join(", "));

    // EXERCISE #6 - delete the state above and this line
    setCheapestPrice(newCheckedPrices.length ? Math.min(...newCheckedPrices) : 0);

    // EXERCISE #7 - delete the state above and this line
    setMostExpensivePrice(newCheckedPrices.length ? Math.max(...newCheckedPrices) : 0);

    // EXERCISE #8 - delete the state above and this line
    setAveragePrice(newCheckedPrices.length ? newTotal / newCheckedPrices.length : 0);

    // EXERCISE #9 - delete the state above and this line
    setTax(newTotal * 0.0825);

    // EXERCISE #10 - delete the state above and this line
    setTotalWithTax(newTotal * 1.0825);
  };

  const total = availablePizzaToppings
    .filter(
      x => x.checked
    )
    .reduce(
      (acc, x) => acc + x.price,
      0,
    )
  ;

  // EXERCISE #1 - add: const selectedCount = ...; (number of checked toppings)
    const selectedCount = availablePizzaToppings.filter(
      x => x.checked
    ).length

  // EXERCISE #2 - add: const hasSelection = ...; (true when at least one topping is checked)

  // EXERCISE #3 - add: const allSelected = ...; (true when every topping is checked)

  // EXERCISE #4 - add: const selectedNames = ...; (checked topping names joined with ", ")

  // EXERCISE #5 - add: const unselectedNames = ...; (unchecked topping names joined with ", ")

  // EXERCISE #6 - add: const cheapestPrice = ...; (lowest price among checked toppings, 0 if none)

  // EXERCISE #7 - add: const mostExpensivePrice = ...; (highest price among checked toppings, 0 if none)

  // EXERCISE #8 - add: const averagePrice = ...; (average price of checked toppings, 0 if none)

  // EXERCISE #9 - add: const tax = ...; (8.25% of total)

  // EXERCISE #10 - add: const totalWithTax = ...; (total plus 8.25% tax)

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
              () => updateToppings(
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
              () => updateToppings(
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
                    () => updateToppings(
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