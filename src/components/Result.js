import {
  Fragment,
  useContext,
  // useEffect,
  useRef,
} from "react";
import { Accordion, AccordionContext } from "react-bootstrap";
import PropTypes from "prop-types";

import Localities from "./Localities";
import styled from "styled-components";
import "./result.css";

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
  const { nameCommon, speakers, localities, number, track } = details;

  const { activeEventKey } = useContext(AccordionContext);
  const thisElem = useRef();

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
          <Fragment>
            <SpeakerInfo>
              Spoken by/Kaikōrero:{" "}
              <SpeakerName>{speakers.join(", ")}</SpeakerName>
            </SpeakerInfo>
            <Localities localities={localities} zone={number} track={track} />
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
    localities: PropTypes.arrayOf(PropTypes.shape(Localities.propTypes)),
  }),
};

Result.defaultProps = {
  details: {},
};

export default Result;
