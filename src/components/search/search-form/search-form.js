import React from 'react';
import { ReactComponent as SearchIcon } from './search.svg';
import { ReactComponent as SpinnerIcon } from './spinner.svg';
import { ReactComponent as CloseIcon } from './close.svg';
import './search-form.css';

const SearchForm = ({ term, loading, onSubmit, onChange, onFocus, onBlur, onClear }) => {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <div className="search-form__field">
        <label className="visually-hidden" htmlFor="search">Find podcasts</label>
        <input
          className="search-form__input"
          id="search"
          type="text"
          value={term}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Find podcasts"
        />
        { !loading &&
          <SearchIcon
            className="search-form__icon search-form__icon-search"
            width="18"
            height="18"
            aria-hidden="true"
          />
        }
        { loading &&
          <SpinnerIcon
            className="search-form__icon search-form__icon-spinner"
            width="18"
            height="18"
            aria-hidden="true"
          />
        }
        { term.length > 0 &&
          <button
            className="search-form__clear"
            type="button"
            aria-label="Clear field"
            onClick={onClear}
          >
            <CloseIcon
              className="search-form__icon search-form__icon-close"
              width="18"
              height="18"
              aria-hidden="true"
            />
          </button>
        }
      </div>
    </form>
  );
};

export default SearchForm;
