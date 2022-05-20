import { Fragment, useContext, useEffect, useRef } from "react";
import { Accordion, AccordionContext } from "react-bootstrap";
import PropTypes from "prop-types";

import Localities from "./Localities";
import styled from "styled-components";

const SpeakerInfo = styled.div`
  font-size: 1.5em;
`;

export const Result = (props) => {
  const { details, index } = props;
  const { nameCommon, speakers, localities, number, audioTrackFull } = details;

  const { activeEventKey } = useContext(AccordionContext);
  const thisElem = useRef();

  useEffect(() => {
    if (activeEventKey === index.toString()) {
      thisElem.current.scrollIntoView();
    }
  });

  return (
    <Accordion.Item eventKey={index.toString()} ref={thisElem}>
      <Accordion.Header>{nameCommon}</Accordion.Header>
      <Accordion.Body>
        {activeEventKey === index.toString() ? (
          <Fragment>
            <SpeakerInfo>
              Spoken by <strong>{speakers.join(", ")}</strong>
            </SpeakerInfo>
            <Localities
              localities={localities}
              zone={number}
              audioTrackFull={audioTrackFull}
            />
          </Fragment>
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
    localities: PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.number,
        name: PropTypes.string,
        altSpellings: PropTypes.arrayOf(PropTypes.string),
        types: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }),
};

Result.defaultProps = {
  details: {},
};

export default Result;
