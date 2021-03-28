import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './heading.css';

const Heading = ({ as = 'h1', size = 'h1', children }) => {
  const TagName = as;
  const headingClass = classNames('heading', `heading--size--${size}`);

  return (
    <TagName className={headingClass}>{children}</TagName>
  );
};

Heading.propTypes = {
  as: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Heading;
