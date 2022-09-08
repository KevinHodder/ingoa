import styled from "styled-components";
import SpeakerModal from "./SpeakerModal";
import { useState } from "react";
import { hasSpeakerNotes } from "../utils/utils";

const SpeakerNameBlock = styled.p`
  font-style: normal;
  display: inline-flex;
  margin-right: 0.5rem;
  cursor: ${(props) => (props.shouldShowModal ? "pointer" : "unset")};
`;

const SpeakerName = (props) => {
  const { name, hasComma } = props;
  const shouldShowModal = hasSpeakerNotes(name);

  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };
  const openModal = () => {
    if (shouldShowModal) {
      setShow(true);
    }
  };

  return (
    <>
      <SpeakerNameBlock onClick={openModal} shouldShowModal={shouldShowModal}>
        {name}
        {hasComma && ","}
      </SpeakerNameBlock>
      <SpeakerModal show={show} handleClose={closeModal} content={{ name }} />
    </>
  );
};

export default SpeakerName;
