import styled from "styled-components";
import data from "../data.json";
import MapSIZones from "./MapSIZones";

const MapSVGCont = styled.svg`
  width: 100%;
  max-height: 75vh;
`;

const BGImg = styled.image``;

const MapSI = (props) => {
  const { setResults } = props;

  const goTo = (event) => {
    event.preventDefault();
    const ids = event.target.id.split("_").map((val) => parseInt(val));
    setResults(
      data
        .filter((zone) => ids.includes(zone.number))
        .map((zone) => ({ item: zone }))
    );
  };

  return (
    <MapSVGCont viewBox="0 0 100 100">
      <BGImg href={"./maps/SI.png"} x={0} y={0} width={100} height={100} />
      <MapSIZones goTo={goTo} />
    </MapSVGCont>
  );
};

export default MapSI;
