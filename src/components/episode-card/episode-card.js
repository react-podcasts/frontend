import React from 'react';
import { Link } from 'react-router-dom';
import { secondsToString } from '../../utils/time';
import PlayControlContainer from '../play-control-container';
import './episode-card.css';

const EpisodeCard = ({
  podcastId,
  episodeId,
  title,
  podcastTitle,
  coverUrl600,
  duration,
  published,
  url
}) => {
  return (
    <div className="episode-card">
      <img
        className="episode-card__image"
        src={coverUrl600}
        width="60"
        height="60"
        alt={title}
      />
      <div>
        <h3 className="episode-card__title">
          <Link
            className="episode-card__link"
            to={`/podcast/${podcastId}/${episodeId}`}
          >{title}</Link>
        </h3>
        <p className="episode-card__author">
          <Link
            className="episode-card__link"
            to={`/podcast/${podcastId}`}
          >{podcastTitle}</Link>
        </p>
      </div>
      <p>{published}</p>
      <span className="episode-card__duration">
        {secondsToString(duration)}
      </span>
      <PlayControlContainer
        selectedEpisodeData={{
          episodeId,
          title,
          duration,
          published,
          url,
          podcastId,
          podcastTitle,
          coverUrl600
        }}
      />
    </div>
  );
};

export default EpisodeCard;
