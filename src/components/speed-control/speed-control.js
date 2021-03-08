import React from 'react';
import { ReactComponent as PlusIcon } from './plus.svg';
import { ReactComponent as MinusIcon } from './minus.svg';
import { ReactComponent as XIcon } from './x.svg';
import './speed-control.css';

const SpeedControl = ({ value, inc, dec, toggle }) => {
  return (
    <div className="speed-control">
      <button
        className="speed-control__button"
        type="button"
        onClick={inc}
        aria-label="Increase speed"
      >
        <PlusIcon
          className="speed-control__icon"
          width="12"
          height="12"
          aria-hidden="true"
        />
      </button>
      <button
        className="speed-control__toggle"
        type="button"
        onClick={toggle}
        aria-label="Change speed"
      >
        <span>{value}</span>
        <XIcon
          className="speed-control__icon"
          width="12"
          height="12"
          aria-hidden="true"
        />
      </button>
      <button
        className="speed-control__button"
        type="button"
        onClick={dec}
        aria-label="Decrease speed"
      >
        <MinusIcon
          className="speed-control__icon"
          width="12"
          height="12"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default SpeedControl;
