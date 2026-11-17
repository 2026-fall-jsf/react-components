import  Button  from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";


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
            </Card.Body>
        </Card>
    );


};