import { Fragment, useState } from "react";
import styled from "styled-components";
import "./App.css";
import bg from "./assets/bg.png";

import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import MapSI from "./components/MapSI";
import MapNI from "./components/MapNI";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
// import GoToTop from "./components/GoToTop";

const Maps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  const [results, setResults] = useState([]);

  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Header />
        {/*<GoToTop />*/}
        <Maps>
          <MapNI setResults={setResults} />
          <MapSI setResults={setResults} />
        </Maps>

        <SearchBox setResults={setResults} />
        <SearchResults results={results} />
      </main>
    </Fragment>
  );
}

export default App;
