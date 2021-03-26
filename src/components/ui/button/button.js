import React from 'react';
import classNames from 'classnames';
import './button.css';

const Button = ({ className, colorScheme, children, onClick, ...rest }) => {
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

export default Button;
