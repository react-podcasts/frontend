import React from 'react';
import './podcast-info.css';

const PodcastInfo = ({ coverUrl600, title, author, summary }) => {
  return (
    <div className="podcast-info">
      <img
        className="podcast-info__cover"
        src={coverUrl600}
        width="210"
        height="210"
        alt={title}
      />
      <div>
        <h1 className="podcast-info__title">{title}</h1>
        <p className="podcast-info__author">{author}</p>
        <p className="podcast-info__description">{summary}</p>
      </div>
    </div>
  );
};

export default PodcastInfo;