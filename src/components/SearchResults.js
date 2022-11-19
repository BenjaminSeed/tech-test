import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No Results</p>;
  } else {
    return (
      <div className="search-results">
        {results.map((image) => (
          <img
            key={image} // check this
            className="card-image"
            src={image}
            alt="spaceImage"
          />
        ))}
      </div>
    );
  }
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};
