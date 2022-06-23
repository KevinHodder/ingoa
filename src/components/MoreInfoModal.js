import { Modal, Button } from "react-bootstrap";

const MoreInfoModal = (props) => {
  const { show, handleClose, content } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{content.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Placeholder text while we work out how to get useful information into
        here. Aren't active prototypes fun!
        {/*<br />*/}
        {/*{JSON.stringify(content)}*/}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/*<Button variant="primary" onClick={handleClose}>*/}
        {/*  Save Changes*/}
        {/*</Button>*/}
      </Modal.Footer>
    </Modal>
  );
};

export default MoreInfoModal;
