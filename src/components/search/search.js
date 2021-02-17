import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findPodcasts, clearSearchTerm } from '../../actions/search';
import SearchForm from './search-form';
import SearchList from './search-list';
import SearchError from './search-error';
import './search.css';

const Search = () => {
  const [showResults, setShowResults] = useState(false);
  const { term, loading, error, results } = useSelector(state => state.search);
  const dispatch = useDispatch();

  const getPodcasts = (term) => {
    dispatch(findPodcasts(term));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getPodcasts(term);
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    getPodcasts(inputValue);
  };

  const handleClear = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div className="search">
      <SearchForm
        term={term}
        loading={loading}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClear={handleClear}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      { showResults && term.length > 0 &&
        <div className="search__popup">
          { error &&
            <SearchError />
          }
          { results.length > 0 &&
            <SearchList results={results} />
          }
        </div>
      }
    </div>
  );
};

export default Search;
