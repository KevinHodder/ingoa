import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { isArrPresent } from "../utils/utils";
import Speaker from "./Speaker";

const Record = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: 20px minmax(100px, 150px) auto;
  grid-column-gap: 5px;
  grid-row-gap: 3px;
  align-items: center;
  min-height: 20px;
  margin-bottom: 3px;
`;

const Name = styled.div`
  width: minmax(100px, 1fr);
  font-weight: bold;
  cursor: pointer;
`;

const Types = styled.div`
  // width: max-content;
`;

const Alts = styled.div`
  grid-column: 2 / 4;
`;

const AltTitle = styled.div`
  font-weight: bold;
`;

export const Locality = (props) => {
  const { locality, audioRef, currentlyPlaying, setCurrentlyPlaying } = props;
  const thisID = `${locality.name}${locality.audioStart}`;

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (currentlyPlaying !== thisID) {
      setIsPlaying(false);
    }
  }, [currentlyPlaying, thisID]);

  const playName = () => {
    if (audioRef.current) {
      // handle "already playing"
      audioRef.current.pause();
      clearInterval(audioRef.current.int);
      // start new play
      setCurrentlyPlaying(thisID);
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

  return (
    <Record>
      {locality.audioStart ? (
        <Speaker name={locality.name} isPlaying={isPlaying} play={playName} />
      ) : (
        <div />
      )}
      <Name onClick={playName}>{locality.name}</Name>
      {isArrPresent(locality.types) ? (
        <Types>{locality.types.sort().join(", ")}</Types>
      ) : null}
      {isArrPresent(locality.altNames) ? (
        <Alts>
          <AltTitle>Alternatively/Manohi anō</AltTitle>
          {locality.altNames.map((alt, altIndex) => (
            <Locality
              locality={alt}
              audioRef={audioRef}
              currentlyPlaying={currentlyPlaying}
              setCurrentlyPlaying={setCurrentlyPlaying}
              key={`${locality.name}${altIndex}`}
            />
          ))}
        </Alts>
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
