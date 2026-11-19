import  Button  from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";



const dummyPizzaToppingsFromApi =[
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
]


export const PizzaToppings = () => {
    //
    //React hooks, useState, useEffect, useNav, b, b, blaahh. . .
    //
    const [availablePizzaToppigs, setAvailablePizzaToppings] = useState(
        dummyPizzaToppingsFromApi.map(
            x => (
                {
                    ...x, 
                    checked: false,
                }
            )
        )
    );

    //bad bad bad duplicated state, squint !! ! !
   // const [total, setTotal] = useState(0);

    //
    //calculated for derived state, and other helper functions and code . . . 
    //
    const total = availablePizzaToppigs
    .filter(
        x => x.checked
    )
    .reduce(
        (acc, x) => acc + x.price,
        0,
    )

    //
    //Return the jsx. . . 
    //

    return (
        <Card
            className="mb-3"
        >
            <Card.Body>
                <Card.Title>
                Choose your pizza toppings. . . .
                </Card.Title>
                <div
                    className="d-flex flex-row gap-3"
                >
                    <Button
                        variant="outline-primary"
                         onClick={
                            () => setAvailablePizzaToppings(
                                availablePizzaToppigs.map(
                                    x => (
                                        {
                                            ...x,
                                            checked:true,
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
                                availablePizzaToppigs.map(
                                x => (
                                    {
                                        ...x,
                                        checked: false,
                                    }))
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
                        availablePizzaToppigs.map(
                            x => (
                                <Form.Check
                                key={
                                    x.name
                                }
                                    label={`${x.name} ($${x.price.toFixed(2)})`}
                                    checked={x.checked}
                                    onChange={
                                        () => setAvailablePizzaToppings(
                                            availablePizzaToppigs.map(
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
                    <h4>
                        Total: ${total.toFixed(2)}
                    </h4>
                </Form>
            </Card.Body>
        </Card>
    );


};