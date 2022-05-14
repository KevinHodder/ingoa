import { Fragment } from "react";
import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";

import Localities from "./Localities";
import IndividualRecord from "./IndividualRecord";

export const Result = (props) => {
  const { details, index } = props;
  const { nameCommon, selectedNames, localities, zone, audioTrackFull } =
    details;

  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>{nameCommon}</Accordion.Header>
      <Accordion.Body>
        {selectedNames.length && (
          <Fragment>
            <h2 className={"indRecordings"}>Individual Recordings</h2>
            {selectedNames.map((rec) => (
              <IndividualRecord record={rec} key={`${zone}${rec.name}`} />
            ))}
          </Fragment>
        )}
        <hr />
        <Localities
          localities={localities}
          zone={zone}
          audioTrackFull={audioTrackFull}
        />
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
        alternativeSpellings: PropTypes.arrayOf(PropTypes.string),
        types: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }),
};

Result.defaultProps = {
  details: {},
};

export default Result;
