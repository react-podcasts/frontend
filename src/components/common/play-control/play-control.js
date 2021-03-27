import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { playerPlayControl } from '../../../actions/player';
import { playerPlayingSelector, playerEpisodeIdSelector } from '../../../selectors/player';
import { historySelector } from '../../../selectors/history';
import ProgressRing from '../../ui/progress-ring';
import { ReactComponent as PlayIcon } from './play.svg';
import { ReactComponent as PauseIcon } from './pause.svg';
import './play-control.css';

const PlayControl = ({ selectedEpisodeData, theme }) => {
  const dispatch = useDispatch();
  const playing = useSelector(playerPlayingSelector);
  const episodeId = useSelector(playerEpisodeIdSelector);
  const history = useSelector(historySelector);
  const { episodeId: selectedEpisodeId, duration } = selectedEpisodeData;
  const hasInHistory = history.find(e => e.episodeId === selectedEpisodeId);
  const currentTime = hasInHistory ? hasInHistory.currentTime : 0;
  const percent = currentTime / duration * 100 || 0;
  const type = playing && episodeId === selectedEpisodeId ? 'pause' : 'play';
  const Icon = type === 'play' ? PlayIcon : PauseIcon;
  const label = `${type === 'play' ? 'Play' : 'Pause'} episode`;
  const playControlClass = classNames('play-control', {
    'play-control--theme--fill': theme === 'fill'
  });
  const playControlIconClass = classNames('play-control__icon', {
    'play-control__icon-play': type === 'play'
  });

  const handleClick = () => dispatch(playerPlayControl(selectedEpisodeData));

  return (
    <button
      className={playControlClass}
      type="button"
      onClick={handleClick}
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
