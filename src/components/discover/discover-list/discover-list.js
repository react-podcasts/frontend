import React from 'react';
import { Link } from 'react-router-dom';
import './discover-list.css';

const DiscoverList = ({ podcasts }) => {
  return (
    <ul className="discover-list">
      {
        podcasts.map(({ id, title, author, coverUrl100 }) => {
          return (
            <li key={id}>
              <Link
                className="discover-list__link"
                to={`/podcast/${id}`}
              >
                <img
                  className="discover-list__image"
                  src={coverUrl100}
                  alt={title}
                />
                <h3 className="discover-list__title">{title}</h3>
                <p className="discover-list__author">{author}</p>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

export default DiscoverList;
