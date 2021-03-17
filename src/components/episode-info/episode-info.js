import React from 'react';
import { Link } from 'react-router-dom';
import PlayControl from '../play-control';
import './episode-info.css';

const EpisodeInfo = ({
  podcastId,
  episodeId,
  podcastTitle,
  episodeTitle,
  coverUrl600,
  published,
  url,
  duration
}) => {
  return (
    <div className="episode-info">
      <div className="episode-info__cover">
        <img
          className="episode-info__image"
          src={coverUrl600}
          width="210"
          height="210"
          alt={podcastTitle}
        />
        <div className="episode-info__button">
          <PlayControl
            selectedEpisodeData={{
              episodeId,
              title: episodeTitle,
              duration,
              published,
              url,
              podcastId,
              podcastTitle,
              coverUrl600
            }}
          />
        </div>
      </div>
      <div>
        <Link
          className="episode-info__author"
          to={`/podcast/${podcastId}`}
        >{podcastTitle}</Link>
        <h1 className="episode-info__title">{episodeTitle}</h1>
        <p className="episode-info__published">{published}</p>
      </div>
    </div>
  );
};

export default EpisodeInfo;
