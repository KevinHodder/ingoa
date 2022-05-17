import { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Locality from "./Locality";

const Header = styled.h2`
  margin-top: 1em;
`;

export const Localities = (props) => {
  const { localities, audioTrackFull, zone } = props;

  const audioRef = useRef();

  return localities.length ? (
    <Fragment>
      <audio ref={audioRef} src={`./${audioTrackFull}`} />
      <Header>Localities</Header>
      {localities.map((locality, index) => (
        <Locality
          locality={locality}
          audioRef={audioRef}
          key={`${zone}${index}`}
        />
      ))}
    </Fragment>
  ) : null;
};

Localities.propTypes = {
  localities: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number,
      name: PropTypes.string,
      altSpellings: PropTypes.arrayOf(PropTypes.string),
      types: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  audioTrackFull: PropTypes.string,
};

Localities.defaultProps = {
  details: {},
};

export default Localities;
