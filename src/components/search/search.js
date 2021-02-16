import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findPodcasts } from '../../actions/search';

const Search = () => {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Find podcasts</label>
        <input
          id="search"
          type="text"
          value={term}
          onChange={handleChange}
          placeholder="Find podcasts"
        />
      </form>
      { loading && <p>Loading...</p> }
      { error && <p>Podcasts not found</p> }
      <ul>
        {
          results.map(({ id, title, author, coverUrl60 }) => {
            return (
              <li key={id}>
                <img src={coverUrl60} alt={title}/>
                <h4>{title}</h4>
                <span>{author}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Search;
