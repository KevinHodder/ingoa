import { useEffect, useRef, useState } from "react";
import { ReactComponent as Speaker } from "../assets/speaker.svg";
import styled from "styled-components";

const Record = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: 20px minmax(100px, 150px);
  grid-column-gap: 5px;
  align-items: baseline;
`;
const Icon = styled(Speaker)`
  height: 20px;
  width: 20px;
`;

export const IndividualRecord = (props) => {
  const { record } = props;
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const playName = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const setToNotPlaying = () => setIsPlaying(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", setToNotPlaying);
    }
  });

  const speakerStyle = {
    fill: isPlaying ? "red" : "black",
  };
  return (
    <Record>
      <Icon alt={"play name"} onClick={playName} style={speakerStyle} />
      <h4>{record.name}</h4>
      <audio ref={audioRef} src={`./${record.audioTrack}`} />
    </Record>
  );
};

export default IndividualRecord;
