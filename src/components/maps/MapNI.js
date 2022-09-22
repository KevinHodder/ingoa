import styled from "styled-components";
import data from "../../data/zones.json";
import MapNIZones from "./MapNIZones";

const MapSVGCont = styled.svg`
  max-width: 100%;
  min-width: 50vh;
  max-height: 75vh;

  @media (max-width: 650px) {
    display: none;
  }
`;

const BGImg = styled.image``;

const MapNI = (props) => {
  const { setResults } = props;

  const goTo = (event) => {
    event.preventDefault();
    const ids = event.target.id.split("_").map((val) => parseFloat(val));
    setResults(data.filter((zone) => ids.includes(zone.number)));
  };

  return (
    <MapSVGCont viewBox="0 0 72 100" role={"presentation"}>
      <BGImg href={"./maps/NI.webp"} x={0} y={0} width={72} height={100} />
      <MapNIZones goTo={goTo} data={data} />
    </MapSVGCont>
  );
};

export default MapNI;
