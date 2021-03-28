import React from 'react';
import PropTypes from 'prop-types';
import './progress-ring.css';

const ProgressRing = ({ percent }) => {
  const radius = 16;
  const stroke = 2;
  const normalizedRadius = radius - stroke / 2;
  const circumference = Math.round(normalizedRadius * stroke * Math.PI);
  const offset = Math.round(circumference - percent / 100 * circumference);

  return (
    <svg
      className="progress-ring"
      width={radius * 2}
      height={radius * 2}
      aria-hidden="true"
    >
      <circle
        className="progress-ring__progress"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

ProgressRing.propTypes = {
  percent: PropTypes.number.isRequired
};

export default ProgressRing;
