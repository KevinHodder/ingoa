import styled from "styled-components";
import SpeakerName from "./SpeakerName";

const SpeakerInfoSection = styled.div`
  font-size: 1.5em;
  font-style: italic;
  font-weight: normal;
`;

const SpeakerInfo = (props) => {
  const { speakers } = props;
  return (
    <SpeakerInfoSection>
      Spoken by | Kaikōrero:&nbsp;
      {speakers.map((speakerName) => (
        <SpeakerName name={speakerName} />
      ))}
    </SpeakerInfoSection>
  );
};

export default SpeakerInfo;
