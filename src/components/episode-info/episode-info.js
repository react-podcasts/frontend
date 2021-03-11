import React from 'react';
import { Link } from 'react-router-dom';
import './episode-info.css';

const EpisodeInfo = ({ id, podcastTitle, episodeTitle, coverUrl600, published }) => {
  return (
    <div className="episode-info">
      <img
        src={coverUrl600}
        width="210"
        height="210"
        alt={podcastTitle}
      />
      <div>
        <Link
          className="episode-info__author"
          to={`/podcast/${id}`}
        >{podcastTitle}</Link>
        <h1 className="episode-info__title">{episodeTitle}</h1>
        <p className="episode-info__published">{published}</p>
      </div>
    </div>
  );
};

export default EpisodeInfo;
