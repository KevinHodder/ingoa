import Fuse from "fuse.js";
import { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { zones } from "../data";

const fuseZones = new Fuse(zones, {
  includeScore: true,
  includeMatches: true,
  keys: ["nameCommon", "localities.name", "localities.altSpellings"],
  threshold: 0.1,
  distance: 10,
});

const allResults = zones
  .sort((zone) => zone.number)
  .map((zone) => ({
    item: zone,
  }));

const getSearchResults = (searchTerm, setResults) => {
  const results = fuseZones.search(searchTerm);
  const output = JSON.parse(JSON.stringify(results));

  output.map((result) => {
    const matches = result.matches.map((match) => match.value);
    return (result.item.localities = result.item.localities.filter((locality) =>
      matches.includes(locality.name)
    ));
  });
  setResults(output);
};

export const SearchBox = (props) => {
  const { setResults } = props;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      getSearchResults(searchTerm, setResults);
    } else {
      setResults(allResults);
    }
  }, [searchTerm, setResults]);

  return (
    <Fragment>
      <h2>Search for a name</h2>
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
