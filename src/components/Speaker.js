import { ReactComponent as SpeakerSVG } from "../assets/speaker.svg";
import PropTypes from "prop-types";
import styled from "styled-components";

const SpeakerStyled = styled.div`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const Speaker = (props) => {
  const { isPlaying, name, play } = props;

  const speakerStyle = {
    fill: isPlaying ? "red" : "black",
  };

  return (
    <SpeakerStyled alt={`play ${name}`} onClick={play}>
      <SpeakerSVG style={speakerStyle} />
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
