import styled from "styled-components";
import SpeakerModal from "../modals/SpeakerModal";
import { useState } from "react";
import { hasSpeakerNotes } from "../../utils/utils";

const SpeakerNameWrapper = styled.div`
  display: inline;
  &:not(:last-child) {
    &:after {
      content: ", ";
    }
  }
`;
const SpeakerNameBlock = styled.p`
  font-style: normal;
  display: inline-flex;
  cursor: ${(props) => (props.shouldShowModal ? "pointer" : "unset")};
`;

const SpeakerName = (props) => {
  const { name } = props;
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
    <SpeakerNameWrapper>
      <SpeakerNameBlock onClick={openModal} shouldShowModal={shouldShowModal}>
        {name}
      </SpeakerNameBlock>
      <SpeakerModal show={show} handleClose={closeModal} content={{ name }} />
    </SpeakerNameWrapper>
  );
};

export default SpeakerName;
