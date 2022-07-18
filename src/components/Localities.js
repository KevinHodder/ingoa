import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Locality from "./Locality";
import Speaker from "./Speaker";
import { useAudio } from "../utils/useAudio";

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
  const { play, stop, isPlaying, currentlyPlaying } = useAudio();
  const thisID = zoneName;
  const playProps = {
    track,
    id: thisID,
  };

  const sortedLocalities = localities.sort((a, b) =>
    zoneName.includes("Introduction to Part")
      ? a.number - b.number
      : a.name.localeCompare(b.name)
  );

  let [thisIsPlaying, setThisIsPlaying] = useState(false);
  useEffect(() => {
    setThisIsPlaying(isPlaying && currentlyPlaying === thisID);
  }, [isPlaying, currentlyPlaying]);

  return (
    <Fragment>
      <PlayAllBlock onClick={() => (thisIsPlaying ? stop() : play(playProps))}>
        <Speaker isPlaying={thisIsPlaying} name={`all names in ${zoneName}`} />
        <PlayAllText>
          {thisIsPlaying ? "Stop | Kia mutu" : "All | Katoa"}
        </PlayAllText>
      </PlayAllBlock>

      <Header>Individual names | Ngā ingoa takitahi</Header>

      {localities &&
        sortedLocalities.map((locality, index) => (
          <Locality
            locality={locality}
            track={track}
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
