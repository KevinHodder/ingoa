import { Modal } from "react-bootstrap";
import {
  getSeeAlsoRecordsByIds,
  isArrPresent,
  getAllSuperRecs,
  getZoneNameByZoneNumber,
} from "../utils/utils";
import ModalPlay from "./ModalPlay";
import ModalPlaySS from "./ModalPlaySS";

const MoreInfoModal = (props) => {
  const { show, handleClose, content } = props;
  const { noteName, notePlace, noteSpeech, groups, supers, zoneNumber, order } =
    content;

  const alsoRecs = getSeeAlsoRecordsByIds(content?.seeAlso);
  // const group1Recs = groups?.[0] ? getGroupRecordsById(groups[0].id) : [];
  // const group2Recs = groups?.[1] ? getGroupRecordsById(groups[1].id) : [];

  const superRecs = getAllSuperRecs(supers, zoneNumber, order);
  const noTextNotes = !(noteSpeech || notePlace || noteName);
  const noListedNotes = !isArrPresent(superRecs);
  const noNotes = noTextNotes && !isArrPresent(alsoRecs) && noListedNotes;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{content.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          Zone {zoneNumber}, {getZoneNameByZoneNumber(zoneNumber)}
        </h5>
        {noteName ? <div>Note on the name: {noteName}</div> : null}
        {notePlace ? <div>Note on the place: {notePlace}</div> : null}
        {noteSpeech ? <div>Note on the recording: {noteSpeech}</div> : null}
        {noNotes ? (
          <div>No notes specific to this location or recording</div>
        ) : null}
        {noTextNotes ? null : <br />}
        {/*  Also see stuff*/}
        {isArrPresent(alsoRecs) ? <h4>See also | Tirohia hoki</h4> : <></>}
        {alsoRecs.map((rec) => (
          <ModalPlay {...rec} key={`${rec.zone}-${rec.order}`} />
        ))}
        {isArrPresent(alsoRecs) ? <br /> : <></>}
        {/*/!* Group 1*!/*/}
        {/*{isArrPresent(group1Recs) ? (*/}
        {/*  <h4>Also associated with {groups[0].name} | Tirohia hoki</h4>*/}
        {/*) : (*/}
        {/*  <></>*/}
        {/*)}*/}
        {/*{group1Recs.map((rec) => (*/}
        {/*  <ModalPlay {...rec} key={`${rec.zone}-${rec.order}`} />*/}
        {/*))}*/}
        {/*{isArrPresent(group1Recs) ? <br /> : <></>}*/}
        {/*/!* Group 2 info*!/*/}
        {/*{isArrPresent(group2Recs) ? (*/}
        {/*  <h4>Also associated with {groups[1].name} | Tirohia hoki</h4>*/}
        {/*) : (*/}
        {/*  <></>*/}
        {/*)}*/}
        {/*{group2Recs.map((rec) => (*/}
        {/*  <ModalPlay {...rec} key={`${rec.zone}-${rec.order}`} />*/}
        {/*))}*/}
        {isArrPresent(superRecs) ? (
          <h4>Also associated with this location: </h4>
        ) : (
          <></>
        )}
        {superRecs.map((r) => (
          <ModalPlaySS {...r} key={`${r.order}`} />
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
