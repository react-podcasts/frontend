import React from 'react';
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

export default SearchList;
