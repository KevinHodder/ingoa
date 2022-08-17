import PropTypes from "prop-types";
import styled from "styled-components";
import Locality from "./Locality";

const Header = styled.h2`
  margin-top: 1em;
  font-style: italic;
  font-size: 1.5rem;
  font-weight: normal;
`;

export const Localities = (props) => {
  const { localities, track, zone, zoneName, openModal, setModalContent } =
    props;

  const sortedLocalities = localities.sort((a, b) =>
    zoneName.includes("Introduction to Part")
      ? a.number - b.number
      : a.name.localeCompare(b.name)
  );

  return (
    <>
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
    </>
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
