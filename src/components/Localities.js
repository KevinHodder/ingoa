import { Fragment, useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Locality from "./Locality";
import Speaker from "./Speaker";

const Header = styled.h2`
  margin-top: 1em;
  font-style: italic;
  font-size: 1.5rem;
  font-weight: normal;
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
  font-size: 1.5rem;
  white-space: nowrap;
`;

export const Localities = (props) => {
  const { localities, track, zone, zoneName, openModal, setModalContent } =
    props;

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
      <audio ref={audioRef} src={`./${track}`} />

      <PlayAllBlock onClick={playAll}>
        <Speaker isPlaying={isPlayingAll} name={`all names in ${zoneName}`} />
        <PlayAllText>
          {isPlayingAll ? "Pause/Tūtataria" : "All/Katoa"}
        </PlayAllText>
      </PlayAllBlock>

      <Header>Individual names/He ingoa takitahi</Header>

      {localities.map((locality, index) => (
        <Locality
          locality={locality}
          audioRef={audioRef}
          currentlyPlaying={currentlyPlaying}
          setCurrentlyPlaying={setCurrentlyPlaying}
          openModal={openModal}
          setModalContent={setModalContent}
          key={`${zone.toString().padStart(3, "0")}${index}`}
        />
      ))}
    </Fragment>
  ) : null;
};

Localities.propTypes = {
  localities: PropTypes.arrayOf(PropTypes.shape(Locality.propTypes)),
  track: PropTypes.string,
};

Localities.defaultProps = {
  details: {},
};

export default Localities;
