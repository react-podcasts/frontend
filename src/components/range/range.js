import React from 'react';
import './range.css';

const Range = ({ min, max, value, onChange }) => {
  return (
    <input
      className="range"
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
};

export default Range;
