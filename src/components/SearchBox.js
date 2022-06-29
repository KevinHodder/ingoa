import Fuse from "fuse.js";
import { useState, useEffect, Fragment, useRef } from "react";
import PropTypes from "prop-types";
import zones from "../data/zones.json";
import styled from "styled-components";
import { getIndexData, getResultDataBasedOnFuseResult } from "../utils/utils";

const searchData = getIndexData(zones);

const allResults = zones.sort((a, b) => a.number - b.number);
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
  distance: 100,
};
const fuseZones = new Fuse(searchData, fuseOptions);

const getSearchResults = (searchTerm, setResults) => {
  const results = fuseZones.search(searchTerm);
  setResults(getResultDataBasedOnFuseResult(results, zones));
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
