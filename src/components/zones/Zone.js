import { useContext, useState, useRef } from "react";
import { Accordion, AccordionContext } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

import Localities from "./Localities";
import MoreInfoModal from "../modals/MoreInfoModal";
import PlayAll from "../audio/PlayAll";
import SpeakerInfo from "./SpeakerInfo";
import "./zone.css";

const ZoneNumber = styled.div`
  font-size: 1.5em;
  margin-bottom: 1em;
`;
const ZoneNotes = styled.div`
  font-size: 1.2em;
`;

const PlayAllBlock = styled(PlayAll)`
  margin-bottom: 1em;
`;
export const Zone = (props) => {
  const { details, index } = props;
  const { nameCommon, speakers, localities, number, track, notes } = details;

  const isPartZone = nameCommon.includes("Introduction to Part");

  const { activeEventKey } = useContext(AccordionContext);
  const thisElem = useRef();

  const [show, setShow] = useState(false);
  const [content, setModalContent] = useState({});
  const closeModal = () => {
    setShow(false);
  };
  const openModal = () => {
    setShow(true);
  };

  // useEffect(() => {
  //   // if (activeEventKey === index.toString()) {
  //     // thisElem.current.scrollIntoView();
  //   // }
  // });

  return (
    <Accordion.Item eventKey={index.toString()} ref={thisElem}>
      <Accordion.Header>{nameCommon}</Accordion.Header>
      <Accordion.Body>
        {activeEventKey === index.toString() ? (
          <>
            {isPartZone ? null : <ZoneNumber>Zone {number}</ZoneNumber>}
            <PlayAllBlock track={track} zoneName={nameCommon} />
            {notes ? <ZoneNotes>{notes}</ZoneNotes> : null}
            <SpeakerInfo speakers={speakers} />
            <Localities
              localities={localities}
              zone={number}
              zoneName={nameCommon}
              track={track}
              openModal={openModal}
              setModalContent={setModalContent}
            />
            <MoreInfoModal
              show={show}
              handleClose={closeModal}
              content={content}
            />
          </>
        ) : null}
      </Accordion.Body>
    </Accordion.Item>
  );
};

Zone.propTypes = {
  details: PropTypes.shape({
    number: PropTypes.number,
    nameCommon: PropTypes.string,
    selectedNames: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        audioTrack: PropTypes.string,
      })
    ),
    localities: PropTypes.arrayOf(PropTypes.shape(Localities.propTypes)),
  }),
};

Zone.defaultProps = {
  details: {},
};

export default Zone;
