import { forwardRef, useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getTypesString, isArrPresent } from "../../utils/utils";
import Speaker from "../audio/Speaker";
import { useAudio } from "../../utils/useAudio";

const ShowMore = styled.div`
  opacity: 0;
`;

const Record = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: minmax(30%, 250px) auto 95px;
  grid-column-gap: 5px;
  grid-row-gap: 3px;
  align-items: center;
  min-height: 20px;
  margin-bottom: 3px;
  white-space: wrap;
  :hover {
    ${ShowMore} {
      opacity: 1;
    }
  }
`;

const TooltipZone = styled.div`
  width: 100%;
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

const Name = styled.div`
  max-width: 225px;
  font-weight: 500;
  font-size: 1.5em;
  cursor: ${(props) => (props.showPointer ? "pointer" : "unset")};
  word-break: break-word;
`;

const Types = styled.div`
  font-size: 1.3rem;
`;

const Alts = styled.div`
  grid-column: 1 / 4;
  margin-left: 25px;
`;

const AltTitle = styled.div`
  font-weight: bold;
  font-style: italic;
`;

const Placeholder = styled.div`
  min-width: 20px;
`;

const Locality = (props) => {
  const { locality, track, openModal, setModalContent, hideShowMore } = props;
  const thisID = locality.uniqueId;

  const { play, isPlaying, currentlyPlaying } = useAudio();
  const playProps = {
    track,
    id: thisID,
    start: locality.audioStart,
    end: locality.audioEnd,
  };

  let [thisIsPlaying, setThisIsPlaying] = useState(false);
  useEffect(() => {
    setThisIsPlaying(isPlaying && currentlyPlaying === thisID);
  }, [isPlaying, currentlyPlaying]);

  const showMore = (e) => {
    e.preventDefault();
    setModalContent(locality);
    openModal();
  };

  // These should never play the whole track
  const playAudio = (props) => {
    if (props.start && props.end) {
      return play(props);
    }
  };

  const PlayableName = forwardRef((props, ref) => (
    <TooltipZone {...props} onClick={() => playAudio(playProps)} ref={ref}>
      {locality.audioStart ? (
        <Speaker name={locality.name} isPlaying={thisIsPlaying} />
      ) : (
        <Placeholder />
      )}
      <Name showPointer={!!locality.audioStart}>{locality.name}</Name>
    </TooltipZone>
  ));

  const TTCont = styled.div`
    font-size: 1rem;
  `;

  const ttColor = "#867b7b";
  const WrappedPlayableName = () => {
    if (locality.speaker) {
      return (
        <Tooltip
          title={<TTCont>Spoken by {locality.speaker}</TTCont>}
          followCursor={true}
          arrow
          placement="top"
          componentsProps={{
            tooltip: { sx: { backgroundColor: ttColor } },
            arrow: { sx: { color: ttColor } },
          }}
        >
          <PlayableName />
        </Tooltip>
      );
    }
    return <PlayableName />;
  };

  const typesStrings = getTypesString(locality.types, locality.name);

  return (
    <Record>
      <WrappedPlayableName />
      {typesStrings ? <Types>{typesStrings}</Types> : <div />}
      {hideShowMore ? (
        <></>
      ) : (
        <ShowMore onClick={showMore}>Show more | Whakakitea atu</ShowMore>
      )}
      {isArrPresent(locality.altNames) ? (
        <Alts>
          <AltTitle>Alternatively | Manohi anō</AltTitle>
          {locality.altNames.map((alt, altIndex) => (
            <Locality
              locality={alt}
              track={track}
              key={`${locality.name}${altIndex}`}
              hideShowMore={true}
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
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    audioStart: PropTypes.number,
    audioEnd: PropTypes.number,
    speaker: PropTypes.string,
    uniqueId: PropTypes.string,
  }),
  audioRef: PropTypes.object,
  currentlyPlaying: PropTypes.string,
  setCurrentlyPlaying: PropTypes.func,
};

Locality.defaultProps = {
  locality: {},
  audioRef: {},
  currentlyPlaying: undefined,
};

export default Locality;
