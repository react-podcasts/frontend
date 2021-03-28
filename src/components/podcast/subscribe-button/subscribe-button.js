import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../ui/button';
import './subscribe-button.css';

const SubscribeButton = ({ subscribed, onSubscribe }) => {
  const buttonText = subscribed ? 'Unsubscribe' : 'Subscribe';
  const buttonClass = classNames('subscribe-button', {
    'subscribe-button--subscribed': subscribed
  });

  return (
    <Button
      className={buttonClass}
      onClick={onSubscribe}
    >{buttonText}</Button>
  );
};

SubscribeButton.propTypes = {
  subscribed: PropTypes.bool.isRequired,
  onSubscribe: PropTypes.func.isRequired
};

export default SubscribeButton;
