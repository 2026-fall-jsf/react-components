import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./egaritaluisComponent.css";

const SIDES = 12;
const sideAngles = Array.from({ length: SIDES }, (_, i) => i * (360 / SIDES));
const finAngles = [0, 120, 240];
const flameAngles = [0, 60, 120];

// A rocket built from CSS 3D transformed faces: a 12-sided body, a 12-sided nose cone, 3 fins and flames
const Rocket3D = () => (
  <div className="rocket-flight">
    <div className="rocket-tilt">
      <div className="rocket-spin">
        {sideAngles.map(a => (
          <div
            key={`body-${a}`}
            className="rocket-face"
            style={{ transform: `rotateY(${a}deg) translateZ(28px)` }}
          />
        ))}
        {sideAngles.map(a => (
          <div
            key={`nose-${a}`}
            className="rocket-nose"
            style={{ transform: `rotateY(${a}deg) rotateX(27deg)` }}
          />
        ))}
        {finAngles.map(a => (
          <div
            key={`fin-${a}`}
            className="rocket-fin"
            style={{ transform: `rotateY(${a}deg)` }}
          />
        ))}
        {flameAngles.map(a => (
          <div
            key={`flame-${a}`}
            className="rocket-flame"
            style={{ transform: `rotateY(${a}deg)` }}
          />
        ))}
        <div className="rocket-window" />
      </div>
    </div>
  </div>
);

export const EgaritaluisComponent = () => {
  const [show, setShow] = useState(false);
  // Changing the key remounts the scene, which restarts the launch animation
  const [launchCount, setLaunchCount] = useState(0);

  return (
    <Card className="mt-4" style={{ maxWidth: 420 }}>
      <Card.Body>
        <Card.Title>🚀 Let's go to the moon Dog</Card.Title>
        <Card.Text>
          Click the button to launch.
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            setLaunchCount(c => c + 1);
            setShow(true);
          }}
        >
          Launch mission control
        </Button>
      </Card.Body>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>🛰️ Mission Control</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="rocket-stage" key={launchCount}>
            <div className="rocket-stars" />
            <div className="rocket-stars rocket-stars-2" />
            <Rocket3D />
            <div className="rocket-pad" />
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <span className="text-muted">All systems are go!</span>
          <div className="d-flex gap-2">
            <Button variant="outline-secondary" onClick={() => setShow(false)}>
              Abort
            </Button>
            <Button variant="success" onClick={() => setLaunchCount(c => c + 1)}>
              Launch again!
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};
