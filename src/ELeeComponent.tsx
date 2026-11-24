import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const openPicker = (element: HTMLElement) => {
  if (element instanceof HTMLInputElement) {
    element.showPicker();
  }
};

export const ELeeComponent = () => {
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  return (
    <Card
      className="mb-3"
    >
      <Card.Body>
        <Card.Title>
          Choose delivery date and time...
        </Card.Title>
        <Form.Group
          className="mb-3"
          controlId="deliveryDate"
        >
          <Form.Label>
            Delivery date
          </Form.Label>
          <Form.Control
            type="date"
            value={deliveryDate}
            onClick={e => openPicker(e.currentTarget)}
            onChange={
              e => setDeliveryDate(e.target.value)
            }
          />
        </Form.Group>
        <Form.Group
          controlId="deliveryTime"
        >
          <Form.Label>
            Delivery time
          </Form.Label>
          <Form.Control
            type="time"
            value={deliveryTime}
            onClick={e => openPicker(e.currentTarget)}
            onChange={
              e => setDeliveryTime(e.target.value)
            }
          />
        </Form.Group>
      </Card.Body>
    </Card>
  );
};
