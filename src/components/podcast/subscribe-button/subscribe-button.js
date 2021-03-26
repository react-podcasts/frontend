import React from 'react';
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

export default SubscribeButton;
