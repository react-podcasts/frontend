import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

const Button = ({ className, children, onClick, ...rest }) => {
  const buttonClass = classNames('button', className);

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={onClick}
      {...rest}
    >{children}</button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
