import styled from "styled-components";
import data from "../../data/zones.json";
import MapSIZones from "./MapSIZones";

const MapSVGCont = styled.svg`
  max-width: 100%;
  max-height: 75vh;
  min-width: 50vh;

  @media (max-width: 650px) {
    display: none;
  }
`;

const BGImg = styled.image``;

const MapSI = (props) => {
  const { setResults } = props;

  const goTo = (event) => {
    event.preventDefault();
    const ids = event.target.id.split("_").map((val) => parseFloat(val));
    setResults(data.filter((zone) => ids.includes(zone.number)));
  };

  return (
    <MapSVGCont viewBox="0 0 85.5 100" role={"presentation"}>
      <BGImg href={"./maps/SI.webp"} x={0} y={0} width={85.5} height={100} />
      <MapSIZones goTo={goTo} data={data} />
    </MapSVGCont>
  );
};

export default MapSI;
