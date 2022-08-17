import { useContext, useState, useRef } from "react";
import { Accordion, AccordionContext } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

import Localities from "./Localities";
import MoreInfoModal from "./MoreInfoModal";
import "./result.css";
import PlayAll from "./PlayAll";

const SpeakerInfo = styled.div`
  font-size: 1.5em;
  font-style: italic;
  font-weight: normal;
`;

const SpeakerName = styled.p`
  font-style: normal;
  display: inline-flex;
`;

export const Result = (props) => {
  const { details, index } = props;
  const { nameCommon, speakers, localities, number, track, notes } = details;

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
            <div>Zone {number}</div>
            <PlayAll track={track} zoneName={nameCommon} />
            <div>{notes}</div>
            <SpeakerInfo>
              Spoken by | Kaikōrero:&nbsp;
              <SpeakerName>{speakers.join(", ")}</SpeakerName>
            </SpeakerInfo>
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

Result.propTypes = {
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

Result.defaultProps = {
  details: {},
};

export default Result;
