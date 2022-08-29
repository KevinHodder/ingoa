import { Modal } from "react-bootstrap";
import {
  getSeeAlsoRecordsByIds,
  isArrPresent,
  getAllSuperRecs,
} from "../utils/utils";
import ModalPlay from "./ModalPlay";
import ModalPlaySS from "./ModalPlaySS";
import styled from "styled-components";

const SuperSpacer = styled.div`
  text-align: center;
  margin: 5px auto;
`;

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
        {/* Super scripts */}
        {isArrPresent(superRecs) ? (
          <h4>Associated name/s | He ingoa honoa</h4>
        ) : (
          <></>
        )}
        {superRecs.map((superArr, i, orig) => (
          <>
            <div key={i}>
              {superArr.map((r) => (
                <ModalPlaySS {...r} key={`${r.order}`} />
              ))}
            </div>
            {i < orig.length - 1 ? (
              <SuperSpacer>- - - - - - - </SuperSpacer>
            ) : (
              <></>
            )}
          </>
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
