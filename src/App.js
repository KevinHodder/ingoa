import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

function App() {
  const [results, setResults] = useState([]);

  return (
    <main>
      <SearchBox setResults={setResults} />
      <SearchResults results={results} />
    </main>
  );
}

export default App;
