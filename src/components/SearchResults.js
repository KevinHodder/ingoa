import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import Result from "./Result";
import { Fragment, useEffect, useRef } from "react";

const Wrapper = styled.div`
  padding: 5px;
  background: rgba(155, 155, 155, 0.5);
`;

export const SearchResults = (props) => {
  const { results, isAllResults } = props;
  const acc = useRef();
  useEffect(() => {
    if (!isAllResults) {
      acc.current.scrollIntoView(true);
    }
  });

  return (
    <Wrapper>
      {results.length ? (
        <Fragment>
          <h2>Results/Ingoa rokohina: ({results.length || ""})</h2>
          <Accordion defaultActiveKey="0" ref={acc}>
            {results.map((result, index) => (
              <Result
                details={result.item}
                key={`zone${result.item.number}`}
                index={index}
              />
            ))}
          </Accordion>
        </Fragment>
      ) : (
        <h3>No results found for your search</h3>
      )}
    </Wrapper>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array,
};

SearchResults.defaultProps = {
  results: [],
};

export default SearchResults;
