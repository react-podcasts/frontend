import React from 'react';
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

export default ProgressRing;
