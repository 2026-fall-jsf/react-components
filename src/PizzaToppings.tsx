import  Card from "react-bootstrap/Card";
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
    price: 2.50,
  },
  {
    name: "Mushrooms",
    price: 1.50,
  }
]


export const PizzaToppings = () => {
  
  //
  //React hook, useState, useEffect, useNav, b, b, etc... 
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
  )
  //
  //Calculated or derived state, and other helper functions and code... 
  //
  const total = availablePizzaToppings
    .filter(
      x => x.checked 
    )
    .reduce(
      (acc, x) => acc + x.price,
      0
    )

  //
  //Return the jsx... 
  //
  return  (
    <Card>
     <Card.Body>
      <Card.Title>
        <h3>Pizza Toppings</h3>
      </Card.Title>
        <div className="d-flex">
          <Button variant="outline-success" onClick={() => {
            setAvailablePizzaToppings(
              availablePizzaToppings.map(
                x => (
                  {
                    ...x,
                    checked: true
                  }
                )
              )
            )
          }}>
            All
          </Button>
          <Button variant="outline-secondary" className="mx-2" onClick={() => {
            setAvailablePizzaToppings(
              availablePizzaToppings.map(
                x => (
                  {
                    ...x,
                    checked: false
                  }
                )
              )
            )
          }}>
            None
          </Button>
        </div>
        <Form className="mt-3">
          {availablePizzaToppings.map(
            x => (
              <Form.Check
                label={`${x.name} ($${x.price.toFixed(2)})`}
                checked={x.checked}
                onChange={() =>
                    setAvailablePizzaToppings(
                      availablePizzaToppings.map(y => ({
                        ...y,
                        checked: y === x ? 
                          !y.checked 
                          : y.checked,
                      }))
                    )
                  }
                />
            )
          )
        }
        </Form>

        <h4>Total: ${ total.toFixed(2) }</h4>

     </Card.Body>
    </Card>
  );

};


// export default PizzaToppings;