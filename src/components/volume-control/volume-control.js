import React from 'react';
import Range from '../range';
import { ReactComponent as Volume2Icon } from './volume-2.svg';
import { ReactComponent as Volume1Icon } from './volume-1.svg';
import { ReactComponent as VolumeIcon } from './volume.svg';
import { ReactComponent as VolumeXIcon } from './volume-x.svg';
import './volume-control.css';

const VolumeControl = ({ value, muted, toggleMute, onChange }) => {
  const Icon = muted ? VolumeXIcon : value > 0.6 ?
    Volume2Icon : value > 0.3 ?
    Volume1Icon : value === 0 ? VolumeXIcon : VolumeIcon;

  return (
    <div className="volume-control">
      <button
        className="volume-control__button"
        type="button"
        aria-label={muted ? 'Unmute' : 'Mute'}
        onClick={toggleMute}
      >
        <Icon
          className="volume-control__icon"
          width="24"
          height="24"
          aria-hidden="true"
        />
      </button>
      <Range
        min="0"
        max="1"
        step="0.1"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default VolumeControl;
