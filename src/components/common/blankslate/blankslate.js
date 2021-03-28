import React from 'react';
import PropTypes from 'prop-types';
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

Blankslate.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Blankslate;
