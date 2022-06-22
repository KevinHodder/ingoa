import { ReactComponent as SpeakerPaused } from "../assets/headgreen.svg";
import { ReactComponent as SpeakerPlaying } from "../assets/headred.svg";
import PropTypes from "prop-types";
import styled from "styled-components";

const SpeakerStyled = styled.div`
  height: 20px;
  width: 20px;
  cursor: pointer;
  > svg {
    max-height: 24px;
  }
`;

const Speaker = (props) => {
  const { isPlaying, name, play } = props;

  const handleSpace = (e) => {
    // 32 = spacebar
    if (e.keyCode === 32) {
      e.preventDefault();
      play();
    }
  };

  return (
    <SpeakerStyled
      alt={`play ${name}`}
      onClick={play}
      onKeyDown={handleSpace}
      tabIndex={0}
    >
      {isPlaying ? <SpeakerPlaying /> : <SpeakerPaused />}
    </SpeakerStyled>
  );
};

Speaker.propTypes = {
  isPlaying: PropTypes.bool,
  name: PropTypes.string,
};

Speaker.defaultProps = {
  isPlaying: false,
  name: undefined,
};

export default Speaker;
