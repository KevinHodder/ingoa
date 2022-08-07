import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAudio } from "../utils/useAudio";
import Speaker from "./Speaker";
import { getTypesString } from "../utils/utils";

const PlayRec = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  margin-bottom: 3px;
`;

const ModalPlay = (props) => {
  const { zoneNumber, audioStart, audioEnd, zoneName, name, speaker } = props;
  const track = `zones\\${zoneNumber.toString().padStart(3, "0")}.mp3`;

  const thisID = `modal${zoneNumber}${audioStart}`;
  const { play, isPlaying, currentlyPlaying } = useAudio();
  const playProps = {
    track,
    id: thisID,
    start: audioStart,
    end: audioEnd,
  };

  let [thisIsPlaying, setThisIsPlaying] = useState(false);
  useEffect(() => {
    setThisIsPlaying(isPlaying && currentlyPlaying === thisID);
  }, [isPlaying, currentlyPlaying]);

  return (
    <PlayRec onClick={() => play(playProps)}>
      <Speaker name={props.name} isPlaying={thisIsPlaying} play={() => {}} />
      {props.name} ({getTypesString(props.types, props.name)}), spoken by{" "}
      {speaker}
    </PlayRec>
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
