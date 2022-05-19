import { useContext } from "react";
import { Accordion, AccordionContext } from "react-bootstrap";
import PropTypes from "prop-types";

import Localities from "./Localities";
// import IndividualRecord from "./IndividualRecord";

export const Result = (props) => {
  const { details, index } = props;
  const { activeEventKey } = useContext(AccordionContext);
  const {
    nameCommon,
    // selectedNames,
    speakers,
    localities,
    zone,
    audioTrackFull,
  } = details;

  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>{nameCommon}</Accordion.Header>
      <Accordion.Body>
        {/*{selectedNames.length ? (*/}
        {/*  <Fragment>*/}
        {/*    <h2 className={"indRecordings"}>Individual Recordings</h2>*/}
        {/*    {selectedNames.map((rec) => (*/}
        {/*      <IndividualRecord record={rec} key={`${zone}${rec.name}`} />*/}
        {/*    ))}*/}
        {/*    <hr />*/}
        {/*  </Fragment>*/}
        {/*) : null}*/}
        <div>
          Spoken by <strong>{speakers.join(", ")}</strong>
        </div>
        {activeEventKey === index.toString() ? (
          <Localities
            localities={localities}
            zone={zone}
            audioTrackFull={audioTrackFull}
          />
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
