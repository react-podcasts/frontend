import React from 'react';
import { useSelector } from 'react-redux';
import Range from '../../range';
import { secondsToHms } from '../../../utils/time';
import './progress-control.css';

const ProgressControl = React.forwardRef((_, audio) => {
  const duration = useSelector(state => state.player.duration);
  const currentTime = useSelector(state => state.player.currentTime);

  const handleProgressChange = (event) => {
    const time = event.target.value;
    audio.current.currentTime = time;
  };

  return (
    <div className="progress-control">
      <span className="progress-control__time progress-control__time--left">
        {secondsToHms(currentTime)}
      </span>
      <Range
        min="0"
        max={duration}
        step={1}
        value={currentTime}
        onChange={handleProgressChange}
      />
      <span className="progress-control__time">
        -{secondsToHms(duration - currentTime)}
      </span>
    </div>
  );
});

export default ProgressControl;
