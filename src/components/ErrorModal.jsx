import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ErrorModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Error
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>{props.error && (props.error.name === "SyntaxError" ? "JSON Syntax Error" : props.error.name)}</h6>
        <p>
          {props.error && props.error.message}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;