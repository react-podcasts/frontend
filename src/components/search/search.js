import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findPodcasts, clearSearchTerm } from '../../actions/search';
import { ReactComponent as SearchIcon } from './search.svg';
import { ReactComponent as SpinnerIcon } from './spinner.svg';
import { ReactComponent as CloseIcon } from './close.svg';
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
      <form onSubmit={handleSubmit}>
        <div className="search__field">
          <label className="visually-hidden" htmlFor="search">Find podcasts</label>
          <input
            className="search__input"
            id="search"
            type="text"
            value={term}
            onChange={handleChange}
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
            placeholder="Find podcasts"
          />
          { !loading &&
            <SearchIcon
              className="search__icon-search"
              width="18"
              height="18"
              aria-hidden="true"
            />
          }
          { loading &&
            <SpinnerIcon
              className="search__icon-spinner"
              width="18"
              height="18"
              aria-hidden="true"
            />
          }
          { term.length > 0 &&
            <button
              className="search__clear"
              type="button"
              aria-label="Clear field"
              onClick={handleClear}
            >
              <CloseIcon
                className="search__icon-close"
                width="18"
                height="18"
                aria-hidden="true"
              />
            </button>
          }
        </div>
      </form>
      { showResults && term.length > 0 &&
        <div className="search__menu">
          { error &&
            <div className="search__error">
              <h3 className="search__error-title">No podcasts found</h3>
              <p className="search__error-text">Try more general, or different, keywords</p>
            </div>
          }
          { results.length > 0 &&
            <ul className="search__list">
              {
                results.map(({ id, title, author, coverUrl60 }) => {
                  return (
                    <li key={id} className="search__item">
                      <a className="search__link" href="/">
                        <img className="search__cover" src={coverUrl60} alt={title}/>
                        <div>
                          <h4 className="search__title">{title}</h4>
                          <p className="search__author">{author}</p>
                        </div>
                      </a>
                    </li>
                  );
                })
              }
            </ul>
          }
        </div>
      }
    </div>
  );
};

export default Search;
