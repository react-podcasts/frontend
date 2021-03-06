import React from 'react';
import PlayControl from '../play-control';
import { secondsToString } from '../../utils/time';
import './episodes-list.css';

const EpisodesList = ({ episodes, playingEpisodeId, playing, onPlay, onPause }) => {
  const handleClick = (id) => {
    if (playing) {
      onPause();
    } else {
      onPlay(id);
    }
  };

  return (
    <ul className="episodes-list">
      {
        episodes.map(({ id, title, published, duration }) => {
          return (
            <li key={id} className="episodes-list__item">
              <PlayControl
                type={playing && id === playingEpisodeId ? 'pause' : 'play'}
                onClick={() => handleClick(id)}
              />
              <h2 className="episodes-list__title">{title}</h2>
              <span className="episodes-list__published">{published}</span>
              <span className="episodes-list__duration">{secondsToString(duration)}</span>
            </li>
          );
        })
      }
    </ul>
  );
};

export default EpisodesList;
