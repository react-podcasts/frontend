import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findPodcasts, clearSearchTerm } from '../../actions/search';
import * as selectors from '../../selectors/search';
import SearchForm from './search-form';
import SearchList from './search-list';
import SearchError from './search-error';
import './search.css';

const Search = () => {
  const [showResults, setShowResults] = useState(false);
  const term = useSelector(selectors.searchTermSelector);
  const loading = useSelector(selectors.searchLoadingSelector);
  const error = useSelector(selectors.searchErrorSelector);
  const results = useSelector(selectors.searchResultsSelector);
  const dispatch = useDispatch();
  const popup = useRef();

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

  const handleClose = (event) => {
    if (!popup.current.contains(event.target)) {
      setShowResults(false);
    }
  };

  const handleItemClick = () => {
    setShowResults(false);
    handleClear();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);

    return () => {
      document.removeEventListener('mousedown', handleClose);
    }
  }, []);

  return (
    <div className="search">
      <SearchForm
        term={term}
        loading={loading}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClear={handleClear}
        onFocus={() => setShowResults(true)}
      />
      <div ref={popup}>
        { showResults && term.length > 0 &&
          <div className="search__popup">
            { error &&
              <SearchError />
            }
            { results.length > 0 &&
              <SearchList
                results={results}
                onItemClick={handleItemClick}
              />
            }
          </div>
        }
      </div>
    </div>
  );
};

export default Search;
