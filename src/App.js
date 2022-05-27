import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import MapSI from "./components/MapSI";
import MapNI from "./components/MapNI";
import GoToTop from "./components/GoToTop";

const Maps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  const [results, setResults] = useState([]);

  return (
    <main>
      <GoToTop />
      <Maps>
        <MapNI setResults={setResults} />
        <MapSI setResults={setResults} />
      </Maps>

      <SearchBox setResults={setResults} />
      <SearchResults results={results} />
    </main>
  );
}

export default App;
