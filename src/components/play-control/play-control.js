import React from 'react';
import { ReactComponent as PlayIcon } from './play.svg';
import { ReactComponent as PauseIcon } from './pause.svg';
import './play-control.css';

const PlayControl = ({ type = 'play' }) => {
  return (
    <button
      className="play-control"
      type="button"
      aria-label="Play episode"
    >
      { type === 'play' &&
        <PlayIcon
          className="play-control__icon play-control__icon-play"
          width="14"
          height="14"
          aria-hidden="true"
        />
      }
      { type === 'pause' &&
        <PauseIcon
          className="play-control__icon"
          width="14"
          height="14"
          aria-hidden="true"
        />
      }
    </button>
  );
};

export default PlayControl;
