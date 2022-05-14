import Fuse from "fuse.js";
import { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { zones } from "../data";

const fuseZones = new Fuse(zones, {
  includeScore: true,
  keys: ["nameCommon", "localities.name", "localities.alternativeSpellings"],
});

export const SearchBox = (props) => {
  const { setResults } = props;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      setResults(fuseZones.search(searchTerm));
    }
  }, [searchTerm, setResults]);

  return (
    <Fragment>
      <h2>Search for a location</h2>
      <input
        className={"searchBox"}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Fragment>
  );
};

SearchBox.propTypes = {
  setResults: PropTypes.func.isRequired,
};

export default SearchBox;
