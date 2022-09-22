import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Speaker from "./Speaker";
import { useAudio } from "../../utils/useAudio";

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

const PlayAll = (props) => {
  const { track, zoneName } = props;
  const { play, stop, isPlaying, currentlyPlaying } = useAudio();
  const thisID = zoneName;
  const playProps = {
    track,
    id: thisID,
  };

  let [thisIsPlaying, setThisIsPlaying] = useState(false);
  useEffect(() => {
    setThisIsPlaying(isPlaying && currentlyPlaying === thisID);
  }, [isPlaying, currentlyPlaying]);

  return (
    <PlayAllBlock onClick={() => (thisIsPlaying ? stop() : play(playProps))}>
      <Speaker isPlaying={thisIsPlaying} name={`all names in ${zoneName}`} />
      <PlayAllText>
        {thisIsPlaying ? "Stop | Kia mutu" : "All | Katoa"}
      </PlayAllText>
    </PlayAllBlock>
  );
};

PlayAll.propTypes = {
  track: PropTypes.string.isRequired,
  zoneName: PropTypes.string.isRequired,
};

export default PlayAll;
