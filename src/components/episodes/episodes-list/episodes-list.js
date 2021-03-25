import React from 'react';
import { Link } from 'react-router-dom';
import { secondsToString } from '../../../utils/time';
import PlayControl from '../../common/play-control';
import './episodes-list.css';

const EpisodesList = ({ podcastId, podcastTitle, coverUrl600, episodes }) => {
  return (
    <ul className="episodes-list">
      {
        episodes.map(({ id, title, published, duration, url }) => {
          return (
            <li key={id} className="episodes-list__item">
              <h2 className="episodes-list__title">
                <Link
                  className="episodes-list__link"
                  to={location => `${location.pathname}/${id}`}
                >{title}</Link>
              </h2>
              <span className="episodes-list__published">{published}</span>
              <span className="episodes-list__duration">{secondsToString(duration)}</span>
              <PlayControl
                selectedEpisodeData={{
                  episodeId: id,
                  title,
                  duration,
                  published,
                  url,
                  podcastId,
                  podcastTitle,
                  coverUrl600
                }}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default EpisodesList;
