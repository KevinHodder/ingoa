import styled from "styled-components";
import data from "../data.json";
import MapNIZones from "./MapNIZones";

const MapSVGCont = styled.svg`
  max-width: 100%;
  min-width: 50vh;
  max-height: 75vh;
`;

const BGImg = styled.image``;

const MapNI = (props) => {
  const { setResults, setIsAllResults } = props;

  const goTo = (event) => {
    event.preventDefault();
    const ids = event.target.id.split("_").map((val) => parseInt(val));
    setResults(
      data
        .filter((zone) => ids.includes(zone.number))
        .map((zone) => ({ item: zone }))
    );
    setIsAllResults(false);
  };

  return (
    <MapSVGCont viewBox="0 0 72 100">
      <BGImg href={"./maps/NI.png"} x={0} y={0} width={72} height={100} />
      <MapNIZones goTo={goTo} />
    </MapSVGCont>
  );
};

export default MapNI;
