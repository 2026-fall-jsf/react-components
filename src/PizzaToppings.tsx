import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

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

  //
  // Calculated or dervied state, and other helpers functions and code...
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
            variant='outline-secondary'
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
          className='mb-3'
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
                            ? !y.checked: y.checked
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
      </Card.Body>
    </Card>
  );
};

// export default PizzaToppings;