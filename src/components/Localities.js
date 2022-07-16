import { Fragment, useRef, useState, useEffect } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import PropTypes from "prop-types";
import styled from "styled-components";
import Locality from "./Locality";
import Speaker from "./Speaker";
import { getSprites } from "../utils/utils";

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
  const sprites = getSprites(localities);
  const sortedLocalities = localities.sort((a, b) =>
    zoneName.includes("Introduction to Part")
      ? a.order - b.order
      : a.name.localeCompare(b.name)
  );

  const { play, stop, togglePlayPause, ready, loading, playing } =
    useAudioPlayer({
      src: `./${track}`,
    });
  // const [isPlayingAll, setIsPlayingAll] = useState(false);

  const thisID = zone.nameCommon;

  // useEffect(() => {
  //   if (currentlyPlaying !== thisID) {
  //     setIsPlayingAll(false);
  //   }
  // }, [currentlyPlaying, thisID]);

  // function playAll() {
  //   if (audioRef.current) {
  //     // pause if this is playing
  //     if (!audioRef.current.paused && currentlyPlaying === thisID) {
  //       return audioRef.current.pause();
  //     }
  //     // handle "something else already playing"
  //     if (!audioRef.current.paused) {
  //       audioRef.current.pause();
  //       clearInterval(audioRef.current.int);
  //     }
  //     // start new play
  //     setCurrentlyPlaying(thisID);
  //     audioRef.current.currentTime = 0;
  //     audioRef.current.play();
  //     setIsPlayingAll(true);
  //     audioRef.current.int = setInterval(() => {
  //       if (audioRef.current.paused) {
  //         setIsPlayingAll(false);
  //         clearInterval(audioRef.current.int);
  //       }
  //     }, 10);
  //   }
  // }

  return (
    <Fragment>
      {/*<audio ref={audioRef} src={`./${track}`} />*/}

      <PlayAllBlock onClick={() => (playing ? stop() : play())}>
        <Speaker isPlaying={playing} name={`all names in ${zoneName}`} />
        <PlayAllText>{playing ? "Stop | Kia mutu" : "All | Katoa"}</PlayAllText>
      </PlayAllBlock>

      <Header>Individual names | Ngā ingoa takitahi</Header>

      {localities &&
        sortedLocalities.map((locality, index) => (
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
  );
};

Localities.propTypes = {
  localities: PropTypes.arrayOf(PropTypes.shape(Locality.propTypes)),
  track: PropTypes.string,
};

Localities.defaultProps = {
  details: {},
};

export default Localities;
