import React from 'react';
import './range.css';

const Range = ({ min, max, step, value, onChange }) => {
  return (
    <input
      className="range"
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  );
};

export default Range;
