import { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";

import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import MapSI from "./components/MapSI";
import MapNI from "./components/MapNI";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import GoToTop from "./components/GoToTop";
// import GoToTop from "./components/GoToTop";

const Maps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  const [results, setResults] = useState([]);
  const mapRef = useRef();

  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Header />
        <Maps ref={mapRef}>
          <MapNI setResults={setResults} />
          <MapSI setResults={setResults} />
        </Maps>

        <SearchBox setResults={setResults} />
        <SearchResults results={results} />
        <GoToTop goToElem={mapRef} appearAt={800} />
      </main>
    </Fragment>
  );
}

export default App;
