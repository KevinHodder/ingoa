import { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import bg from "./assets/bg.png";

import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import MapSI from "./components/MapSI";
import MapNI from "./components/MapNI";
import Header from "./components/Header";
// import GoToTop from "./components/GoToTop";

const Maps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Main = styled.main`
  background-colour: ;
`;

function App() {
  const [results, setResults] = useState([]);

  return (
    <Main>
      <Header />
      {/*<GoToTop />*/}
      <Maps>
        <MapNI setResults={setResults} />
        <MapSI setResults={setResults} />
      </Maps>

      <SearchBox setResults={setResults} />
      <SearchResults results={results} />
    </Main>
  );
}

export default App;
