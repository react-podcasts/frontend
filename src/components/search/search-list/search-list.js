import React from 'react';
import './search-list.css';

const SearchList = ({ results }) => {
  return (
    <ul className="search-list">
      {
        results.map(({ id, title, author, coverUrl60 }) => {
          return (
            <li key={id} className="search-list__item">
              <a className="search-list__link" href="/">
                <img className="search-list__cover" src={coverUrl60} alt={title}/>
                <div>
                  <h4 className="search-list__title">{title}</h4>
                  <p className="search-list__author">{author}</p>
                </div>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

export default SearchList;
