import { forwardRef, useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import styled from "styled-components";
import { isArrPresent } from "../utils/utils";
import Speaker from "./Speaker";
import { useAudio } from "../utils/useAudio";

const ShowMore = styled.div`
  opacity: 0;
`;

const Record = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: minmax(120px, 250px) auto 95px;
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
  display: grid;
  grid-template-columns: 20px max-content;
  grid-column-gap: 5px;
  align-items: center;
`;

const Name = styled.div`
  width: 100%;
  max-width: 225px;
  font-weight: 500;
  font-size: 1.5em;
  cursor: pointer;
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

const displayTypeName = (type, localityName) => {
  const isName = type.name.toLowerCase() === localityName.toLowerCase();
  const isEssentiallyName =
    `${localityName} ${type.type}`.toLowerCase() === type.name.toLowerCase();

  return !isName && !isEssentiallyName;
};

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

  const PlayableName = forwardRef((props, ref) => (
    <TooltipZone {...props} ref={ref}>
      {locality.audioStart ? (
        <Speaker
          name={locality.name}
          isPlaying={thisIsPlaying}
          play={() => play(playProps)}
        />
      ) : (
        <div />
      )}
      <Name onClick={() => play(playProps)}>{locality.name}</Name>
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

  const typesStrings =
    (locality.types &&
      locality.types.map(
        (rec) =>
          rec.type +
          (displayTypeName(rec, locality.name) ? ` (${rec.name})` : "")
      )) ||
    [];
  return (
    <Record>
      <WrappedPlayableName />
      {isArrPresent(typesStrings) ? (
        <Types>{typesStrings.join(", ")}</Types>
      ) : (
        <div />
      )}
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
