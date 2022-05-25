import { Fragment, useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Locality from "./Locality";
import Speaker from "./Speaker";

const Header = styled.h2`
  margin-top: 1em;
`;

const PlayAllBlock = styled.div`
  display: grid;
  grid-template-columns: 20px min-content;
  grid-column-gap: 5px;
  align-items: center;
  min-height: 20px;
  cursor: pointer;
`;

const PlayAllText = styled.div`
  font-weight: bold;
  font-size: 2em;
  white-space: nowrap;
`;

export const Localities = (props) => {
  const { localities, audioTrackFull, zone } = props;

  const audioRef = useRef();
  const [currentlyPlaying, setCurrentlyPlaying] = useState();
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  const thisID = zone.nameCommon;

  useEffect(() => {
    if (currentlyPlaying !== thisID) {
      setIsPlayingAll(false);
    }
  }, [currentlyPlaying, thisID]);

  function playAll() {
    if (audioRef.current) {
      // pause if this is playing
      if (!audioRef.current.paused && currentlyPlaying === thisID) {
        return audioRef.current.pause();
      }
      // handle "something else already playing"
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        clearInterval(audioRef.current.int);
      }
      // start new play
      console.log("setCurrentlyPlayng with: ", thisID);
      setCurrentlyPlaying(thisID);
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlayingAll(true);
      audioRef.current.int = setInterval(() => {
        if (audioRef.current.paused) {
          setIsPlayingAll(false);
          clearInterval(audioRef.current.int);
        }
      }, 10);
    }
  }

  return localities.length ? (
    <Fragment>
      <audio ref={audioRef} src={`./${audioTrackFull}`} />

      <PlayAllBlock onClick={playAll}>
        <Speaker
          isPlaying={isPlayingAll}
          name={`all names in ${zone.nameCommon}`}
        />
        <PlayAllText>{isPlayingAll ? "Pause" : "Play All"}</PlayAllText>
      </PlayAllBlock>

      <Header>Names/Ngā Ingoa</Header>

      {localities.map((locality, index) => (
        <Locality
          locality={locality}
          audioRef={audioRef}
          currentlyPlaying={currentlyPlaying}
          setCurrentlyPlaying={setCurrentlyPlaying}
          key={`${zone.toString().padStart(3, "0")}${index}`}
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
