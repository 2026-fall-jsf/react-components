import  Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const PizzaToppings = () => {
  
  //
  //React hook, useState, useEffect, useNav, b, b, etc... 
  //

  //
  //Calculated or derived state, and other helper functions and code... 
  //
  
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
          <Button variant="outline-success">
            All
          </Button>
          <Button variant="outline-secondary" className="mx-2">
            All
          </Button>
        </div>
     </Card.Body>
    </Card>
  );

};


// export default PizzaToppings;