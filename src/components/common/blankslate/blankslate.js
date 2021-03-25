import React from 'react';
import Heading from '../../ui/heading';
import './blankslate.css';

const Blankslate = ({ title, text }) => {
  return (
    <div className="blankslate">
      <div className="blankslate__title">
        <Heading size="h5">{title}</Heading>
      </div>
      <p className="blankslate__text">{text}</p>
    </div>
  );
};

export default Blankslate;
