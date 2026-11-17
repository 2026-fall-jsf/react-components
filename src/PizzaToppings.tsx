import  Button  from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const PizzaToppings = () => {
    //
    //React hooks, useState, useEffect, useNav, b, b, blaahh. . .
    //


    //
    //calculated for derived state, and other helper functions and code . . . 
    //

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
                    >
                        All
                    </Button>
                    <Button
                        variant="outline-secondary"
                    >    
                        None
                    </Button>
                </div>
                <Form
                className="mb-3"
                >
                    <Form.Check
                        label="Peperoni ($2.33)"
                    >
                    </Form.Check>
                    <h4>
                        Total: $4.49
                    </h4>
                </Form>
            </Card.Body>
        </Card>
    );


};