import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './search-list.css';

const SearchList = ({ results, onItemClick }) => {
  return (
    <ul className="search-list">
      {
        results.map(({ id, title, author, coverUrl60 }) => {
          return (
            <li key={id} className="search-list__item">
              <Link
                className="search-list__link"
                to={`/podcast/${id}`}
                onClick={onItemClick}
              >
                <img className="search-list__cover" src={coverUrl60} alt={title}/>
                <div>
                  <h4 className="search-list__title">{title}</h4>
                  <p className="search-list__author">{author}</p>
                </div>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

SearchList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      coverUrl60: PropTypes.string.isRequired
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default SearchList;
