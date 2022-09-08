import styled from "styled-components";
import SpeakerModal from "./SpeakerModal";
import { useState } from "react";
import { hasSpeakerNotes } from "../utils/utils";

const SpeakerNameBlock = styled.p`
  font-style: normal;
  display: inline-flex;
  margin-right: 0.5rem;
`;

const SpeakerName = (props) => {
  const { name, hasComma } = props;

  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };
  const openModal = () => {
    if (hasSpeakerNotes(name)) {
      setShow(true);
    }
  };

  return (
    <>
      <SpeakerNameBlock onClick={openModal}>
        {name}
        {hasComma && ","}
      </SpeakerNameBlock>
      <SpeakerModal show={show} handleClose={closeModal} content={{ name }} />
    </>
  );
};

export default SpeakerName;
