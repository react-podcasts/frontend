import React from 'react';
import classNames from 'classnames';
import { ReactComponent as PlayIcon } from './play.svg';
import { ReactComponent as PauseIcon } from './pause.svg';
import './play-control.css';
import ProgressRing from '../progress-ring/progress-ring';

const PlayControl = ({ type = 'play', theme, percent, onClick }) => {
  const Icon = type === 'play' ? PlayIcon : PauseIcon;
  const playControlClass = classNames('play-control', {
    'play-control--theme-fill': theme === 'fill'
  });
  const playControlIconClass = classNames('play-control__icon', {
    'play-control__icon-play': type === 'play'
  });
  const label = `${type === 'play' ? 'Play' : 'Pause'} episode`;

  return (
    <button
      className={playControlClass}
      type="button"
      onClick={onClick}
      aria-label={label}
    >
      <span className="play-control__progress">
        <ProgressRing percent={percent} />
      </span>
      <Icon
        className={playControlIconClass}
        width="14"
        height="14"
        aria-hidden="true"
      />
    </button>
  );
};

export default PlayControl;
