import React from 'react';
import { Link } from 'react-router-dom';
import { secondsToString } from '../../utils/time';
import PlayControl from '../play-control';
import './episode-card.css';

const EpisodeCard = ({
  podcastId,
  episodeId,
  title,
  author,
  coverUrl600,
  duration,
  published,
  currentTime,
  playing,
  playingEpisodeId,
  onPlayControl
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
          >{author}</Link>
        </p>
      </div>
      <p>{published}</p>
      <span className="episode-card__duration">
        {secondsToString(duration)}
      </span>
      <p>{currentTime}</p>
      <PlayControl
        type={playing && episodeId === playingEpisodeId ? 'pause' : 'play'}
        onClick={() => onPlayControl(episodeId)}
      />
    </div>
  );
};

export default EpisodeCard;
