import Fuse from "fuse.js";
import { useState, useEffect, Fragment, useRef } from "react";
import PropTypes from "prop-types";
import zones from "../data.json";
import styled from "styled-components";

const allResults = zones
  .sort((a, b) => a.number - b.number)
  .map((zone) => ({
    item: zone,
  }));

const fuseOptions = {
  includeScore: true,
  includeMatches: true,
  keys: [
    "nameCommon",
    "localities.name",
    "localities.altSpellings",
    "localities.altNames.name",
    "localities.altNames.altSpellings",
    "localities.speaker",
    "localities.types.name",
  ],
  threshold: 0.1,
  distance: 10,
};
const myIndex = Fuse.createIndex(fuseOptions.keys, zones);
const fuseZones = new Fuse(zones, fuseOptions, myIndex);

const hasMatchingAltName = (locality, matches) => {
  return (
    Array.isArray(locality.altNames) &&
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
  Array.isArray(locality.altSpellings) &&
  locality.altSpellings.reduce(
    (prev, curr) => prev || matches.includes(curr),
    false
  );
const hasMatchingName = (locality, matches) => matches.includes(locality.name);
const hasMatchingSpeaker = (locality, matches) =>
  matches.includes(locality.speaker);
const hasMatchingTypeName = (locality, matches) =>
  Array.isArray(locality.types) &&
  locality.types.reduce(
    (prev, curr) => prev || matches.includes(curr.name),
    false
  );

const getMatchingLocalities = (localities, matches) => {
  return localities.filter(
    (locality) =>
      hasMatchingName(locality, matches) ||
      hasMatchingAltSpelling(locality, matches) ||
      hasMatchingAltName(locality, matches) ||
      hasMatchingSpeaker(locality, matches) ||
      hasMatchingTypeName(locality, matches)
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

const clearSearch = (ref) => {
  ref.current.value = "";
};

const Box = styled.input`
  height: 3.2rem;
  font-size: 2rem;
  width: 100%;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const ClearButton = styled.button`
  font-weight: bold;
  font-size: 1.5rem;
  white-space: nowrap;
  height: 3.2rem;
`;

const SearchText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
  font-style: italic;
  @media (max-width: 650px) {
    display: none;
  }
`;
const SearchTextSmall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
  font-style: italic;
  @media (min-width: 651px) {
    display: none;
  }
`;

export const SearchBox = (props) => {
  const { setResults } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const boxRef = useRef();

  useEffect(() => {
    if (searchTerm) {
      getSearchResults(searchTerm, setResults);
    } else {
      setResults(allResults);
    }
  }, [searchTerm, setResults]);

  const clearHandler = () => {
    clearSearch(boxRef);
    setResults(allResults);
  };

  return (
    <Fragment>
      <SearchText>
        <div>....or write the name of a place or speaker below</div>
        <div>...tuhia ranei te ingoa wāhi, kaikōrero, ki raro</div>
      </SearchText>
      <SearchTextSmall>
        <div>Write the name of a place or speaker below</div>
        <div>Tuhia te ingoa wāhi, kaikōrero, ki raro</div>
      </SearchTextSmall>

      <SearchBar>
        <Box
          className={"searchBox"}
          ref={boxRef}
          placeholder={"Write here / Tuhia ki konei"}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ClearButton onClick={clearHandler}>X</ClearButton>
      </SearchBar>
    </Fragment>
  );
};

SearchBox.propTypes = {
  setResults: PropTypes.func.isRequired,
};

export default SearchBox;
