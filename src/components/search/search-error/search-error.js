import React from 'react';
import './search-error.css';

const SearchError = () => {
  return (
    <div className="search-error">
      <h3 className="search-error__title">No podcasts found</h3>
      <p className="search-error__text">Try more general, or different, keywords</p>
    </div>
  );
};

export default SearchError;
