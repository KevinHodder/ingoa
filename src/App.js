import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import MapSI from "./components/MapSI";
import MapNI from "./components/MapNI";

const Maps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  const [results, setResults] = useState([]);
  const [isAllResults, setIsAllResults] = useState([]);

  return (
    <main>
      <Maps>
        <MapNI setResults={setResults} setIsAllResults={setIsAllResults} />
        <MapSI setResults={setResults} setIsAllResults={setIsAllResults} />
      </Maps>

      <SearchBox setResults={setResults} setIsAllResults={setIsAllResults} />
      <SearchResults results={results} isAllResults={isAllResults} />
    </main>
  );
}

export default App;
