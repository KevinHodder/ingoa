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
import Footer from "./components/Footer";
import { AudioProvider } from "./utils/useAudio";

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
      <AudioProvider>
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
      </AudioProvider>
    </Fragment>
  );
}

export default App;
