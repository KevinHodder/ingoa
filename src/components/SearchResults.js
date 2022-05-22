import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import Result from "./Result";
import { Fragment } from "react";

const Wrapper = styled.div`
  padding: 5px;
  background: rgba(155, 155, 155, 0.5);
`;

export const SearchResults = (props) => {
  const { results } = props;

  return (
    <Wrapper>
      {results.length ? (
        <Fragment>
          <h2>Results: </h2>
          <Accordion defaultActiveKey="0">
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
