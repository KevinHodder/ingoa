import PropTypes from "prop-types";
import { useRef, useState } from "react";

const ModalPlay = (props) => {
  const { zone, audioStart, audioEnd } = props;
  const track = `zones\\${zone.padStart(3, "0")}.mp3`;
  const audioRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  const playName = () => {
    if (audioRef.current) {
      // handle "already playing"
      audioRef.current.pause();
      clearInterval(audioRef.current.int);
      // start new play
      // setCurrentlyPlaying(thisID);
      audioRef.current.currentTime = audioStart;
      audioRef.current.int = setInterval(() => {
        if (audioRef.current.currentTime > audioEnd) {
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
    <>
      <audio ref={audioRef} src={track} />
      <div style={{ display: "inline", marginLeft: "10px" }} onClick={playName}>
        play
      </div>
    </>
  );
};

ModalPlay.propTypes = {
  zone: PropTypes.string,
  order: PropTypes.number,
  audioStart: PropTypes.number,
  audioEnd: PropTypes.number,
  speaker: PropTypes.string,
};

export default ModalPlay;
