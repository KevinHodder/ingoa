import { Modal } from "react-bootstrap";
import { getSpeakerNotesByName } from "../../utils/utils";
import styled from "styled-components";

const Note = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const SpeakerModal = (props) => {
  const { show, handleClose, content } = props;
  const notes = getSpeakerNotesByName(content.name);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{content.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {notes.map((note, i) => (
          <Note key={"note" + i}>{note}</Note>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default SpeakerModal;
