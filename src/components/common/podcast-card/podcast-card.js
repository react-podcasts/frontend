import React from 'react';
import { Link } from 'react-router-dom';
import './podcast-card.css';

const PodcastCard = ({ id, title, author, coverUrl100, coverUrl600 }) => {
  return (
    <Link
      className="podcast-card"
      to={`/podcast/${id}`}
    >
      <img
        className="podcast-card__image"
        src={coverUrl100 || coverUrl600}
        alt={title}
      />
      <h3 className="podcast-card__title">{title}</h3>
      <p className="podcast-card__author">{author}</p>
    </Link>
  );
};

export default PodcastCard;
