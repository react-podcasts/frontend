import React from 'react';
import PlayControl from '../play-control';
import './episodes-list.css';

const EpisodesList = ({ episodes, onPlay }) => {
  return (
    <ul className="episodes-list">
      {
        episodes.map(({ id, title, published, duration }) => {
          return (
            <li key={id} className="episodes-list__item">
              <PlayControl
                type="play"
                onClick={() => onPlay(id)}
              />
              <h2 className="episodes-list__title">{title}</h2>
              <span className="episodes-list__published">{published}</span>
              <span className="episodes-list__duration">{duration}</span>
            </li>
          );
        })
      }
    </ul>
  );
};

export default EpisodesList;
