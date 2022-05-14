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
  console.log(results);

  return (
    <Wrapper>
      <h2>Results: </h2>
      <Accordion defaultActiveKey="0">
        {results.length
          ? results.map((result, index) => (
              <Result
                details={result.item}
                key={`zone${result.item.number}`}
                index={index}
              />
            ))
          : null}
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
