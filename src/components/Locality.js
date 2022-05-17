import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { isArrPresent } from "../utils/utils";
import { ReactComponent as Speaker } from "../assets/speaker.svg";

const Record = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: 20px minmax(100px, 150px) auto;
  grid-column-gap: 5px;
  grid-row-gap: 3px;
  align-items: center;
`;
const Icon = styled(Speaker)`
  height: 20px;
  width: 20px;
`;
const Name = styled.div`
  width: minmax(100px, 1fr);
  font-weight: bold;
`;

const Types = styled.div`
  // width: max-content;
`;

export const Locality = (props) => {
  const { locality, audioRef } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  const playName = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = locality.audioStart;
      audioRef.current.int = setInterval(() => {
        if (audioRef.current.currentTime > locality.audioEnd) {
          audioRef.current.pause();
          setIsPlaying(false);
          clearInterval(audioRef.current.int);
        }
      }, 10);
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const speakerStyle = {
    fill: isPlaying ? "red" : "black",
  };

  return (
    <Record>
      <Icon alt={"play name"} onClick={playName} style={speakerStyle} />
      <Name>{locality.name}</Name>
      <Types>{locality.types.sort().join(", ")}</Types>
      {isArrPresent(locality.altNames) ? (
        <Fragment>
          <hr />
          <h5>Alternative names/pronunciations</h5>
          {locality.altNames.map((alt) => (
            <p>{alt.name}</p>
          ))}
        </Fragment>
      ) : null}
    </Record>
  );
};

Locality.propTypes = {
  locality: PropTypes.shape({
    order: PropTypes.number,
    name: PropTypes.string,
    altSpellings: PropTypes.arrayOf(PropTypes.string),
    types: PropTypes.arrayOf(PropTypes.string),
    audioStart: PropTypes.number,
    audioEnd: PropTypes.number,
  }),
  audioRef: PropTypes.object,
};

Locality.defaultProps = {
  locality: {},
  audioRef: {},
};

export default Locality;
