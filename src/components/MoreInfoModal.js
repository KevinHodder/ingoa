import { Modal } from "react-bootstrap";
import { getSeeAlsoRecordsByIds, isArrPresent } from "../utils/utils";
import ModalPlay from "./ModalPlay";

const MoreInfoModal = (props) => {
  const { show, handleClose, content } = props;

  const alsoRecs = getSeeAlsoRecordsByIds(content?.seeAlso?.map((sa) => sa.id));

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{content.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Placeholder text while we work out how to get useful information into
        here. Aren't active prototypes fun!
        <br />
        {/*{JSON.stringify(alsoRecs)}*/}
        {isArrPresent(alsoRecs) ? <h4>See also | Tirohia hoki</h4> : <></>}
        {alsoRecs.map((rec) => (
          <div key={`${rec.zone}-${rec.order}`}>
            {rec.zoneName}: {rec.name}
            <ModalPlay {...rec} />
          </div>
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
