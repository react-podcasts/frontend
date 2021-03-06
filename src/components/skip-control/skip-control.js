import React from 'react';
import { ReactComponent as SkipNextIcon } from './skip-next.svg';
import { ReactComponent as SkipPrevIcon } from './skip-prev.svg';
import './skip-control.css';

const SkipControl = ({ type, onClick }) => {
  const Icon = type === 'prev' ? SkipPrevIcon : SkipNextIcon;
  const label = `Skip ${type === 'prev' ? 'back' : 'forward'}`;

  return (
    <button
      className="skip-control"
      type="button"
      onClick={onClick}
      aria-label={label}
    >
      <Icon
        className="skip-control__icon"
        width="24"
        height="24"
        aria-hidden="true"
      />
    </button>
  );
};

export default SkipControl;
