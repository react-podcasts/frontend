import React from 'react';
import classNames from 'classnames';
import './subscribe-button.css';

const SubscribeButton = ({ subscribed, onSubscribe }) => {
  const buttonText = subscribed ? 'Unsubscribe' : 'Subscribe';
  const buttonClass = classNames(
    'subscribe-button', {
      'subscribe-button--theme--success': !subscribed,
    }
  );

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={onSubscribe}
    >{buttonText}</button>
  );
};

export default SubscribeButton;
