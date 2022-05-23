import Fuse from "fuse.js";
import { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import zones from "../data.json";

const fuseZones = new Fuse(zones, {
  includeScore: true,
  includeMatches: true,
  keys: [
    "nameCommon",
    "localities.name",
    "localities.altSpellings",
    "localities.altNames.name",
    "localities.altNames.altSpellings",
  ],
  threshold: 0.1,
  distance: 10,
});

const allResults = zones
  .sort((a, b) => a.number > b.number)
  .map((zone) => ({
    item: zone,
  }));

const hasMatchingAltName = (locality, matches) => {
  return (
    locality.altNames &&
    locality.altNames.reduce(
      (prev, curr) =>
        prev ||
        matches.includes(curr.name) ||
        hasMatchingAltSpelling(curr, matches),
      false
    )
  );
};
const hasMatchingAltSpelling = (locality, matches) =>
  locality.altSpellings &&
  locality.altSpellings.reduce(
    (prev, curr) => prev || matches.includes(curr),
    false
  );

const hasMatchingName = (locality, matches) => matches.includes(locality.name);
const getMatchingLocalities = (localities, matches) => {
  return localities.filter(
    (locality) =>
      hasMatchingName(locality, matches) ||
      hasMatchingAltSpelling(locality, matches) ||
      hasMatchingAltName(locality, matches)
  );
};

const getSearchResults = (searchTerm, setResults) => {
  const results = fuseZones.search(searchTerm);
  const output = JSON.parse(JSON.stringify(results));
  results.forEach((result, index) => {
    const matches = result.matches.map((match) => match.value);
    // return whole zone if the search matches zone name
    if (matches.includes(result.item.nameCommon)) {
      return (output[index].item.localities = result.item.localities);
    }
    // otherwise return just matching search results
    const filteredLocalities = getMatchingLocalities(
      result.item.localities,
      matches
    );
    return (output[index].item.localities = filteredLocalities);
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
