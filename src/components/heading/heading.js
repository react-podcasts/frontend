import React from 'react';
import classNames from 'classnames';
import './heading.css';

const Heading = ({ as = 'h1', size = 'h1', children }) => {
  const TagName = as;
  const headingClass = classNames('heading', `heading--size--${size}`);

  return (
    <TagName className={headingClass}>{children}</TagName>
  );
};

export default Heading;
