import { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

export const TsteeleComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <Card className='mt-4'>
      <Card.Body>
        <Card.Title>React-Bootstrap Modal</Card.Title>
        <Card.Text>Press the button to show a modal.</Card.Text>
        <Button variant='primary' onClick={() => setShow(true)}>
          Show modal
        </Button>
      </Card.Body>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant='primary' onClick={() => setShow(false)}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};
