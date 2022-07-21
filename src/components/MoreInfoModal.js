import { Modal } from "react-bootstrap";
import { getSeeAlsoRecordsByIds, isArrPresent } from "../utils/utils";
import ModalPlay from "./ModalPlay";

const MoreInfoModal = (props) => {
  const { show, handleClose, content } = props;
  const { noteName, notePlace, noteSpeech } = content;

  const alsoRecs = getSeeAlsoRecordsByIds(content?.seeAlso?.map((sa) => sa.id));

  const noTextNotes = !(noteSpeech || notePlace || noteName);
  const noNotes = noTextNotes && !isArrPresent(alsoRecs);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{content.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {noteName ? <div>Note on the name: {noteName}</div> : null}
        {notePlace ? <div>Note on the place: {notePlace}</div> : null}
        {noteSpeech ? <div>Note on the recording: {noteSpeech}</div> : null}
        {noNotes ? (
          <div>No notes specific to this location or recording</div>
        ) : null}
        {noTextNotes ? null : <br />}
        {/*{JSON.stringify(alsoRecs)}*/}
        {isArrPresent(alsoRecs) ? <h4>See also | Tirohia hoki</h4> : <></>}
        {alsoRecs.map((rec) => (
          <ModalPlay {...rec} key={`${rec.zone}-${rec.order}`} />
        ))}
      </Modal.Body>
      {/*<Modal.Footer>*/}
      {/*<Button variant="secondary" onClick={handleClose}>*/}
      {/*  Close*/}
      {/*</Button>*/}
      {/*<Button variant="primary" onClick={handleClose}>*/}
      {/*  Save Changes*/}
      {/*</Button>*/}
      {/*</Modal.Footer>*/}
    </Modal>
  );
};

export default MoreInfoModal;
