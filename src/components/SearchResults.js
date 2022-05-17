import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import Result from "./Result";

const Wrapper = styled.div`
  padding: 5px;
  background: rgba(155, 155, 155, 0.5);
`;

export const SearchResults = (props) => {
  const { results } = props;

  return (
    <Wrapper>
      <h2>Results: </h2>
      <Accordion defaultActiveKey="0">
        {results.length
          ? results
              .slice(0, 10)
              .map((result, index) => (
                <Result
                  details={result.item}
                  key={`zone${result.item.number}`}
                  index={index}
                />
              ))
          : null}
        {results.length > 10 ? (
          <div>Use the search bar to find more regions"</div>
        ) : null}
      </Accordion>
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
