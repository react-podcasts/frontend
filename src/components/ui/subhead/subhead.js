import React from 'react';
import PropTypes from 'prop-types';
import './subhead.css';

const Subhead = ({ children }) => {
  return (
    <div className="subhead">
      {children}
    </div>
  );
};

Subhead.propTypes = {
  children: PropTypes.node.isRequired
};

export default Subhead;
