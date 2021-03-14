import React from 'react';
import SubscribeButton from '../subscribe-button';
import './podcast-info.css';

const PodcastInfo = ({ coverUrl600, title, author, summary, subscribed, onSubscribe }) => {
  return (
    <div className="podcast-info">
      <div>
        <img
          className="podcast-info__image"
          src={coverUrl600}
          width="210"
          height="210"
          alt={title}
        />
        <SubscribeButton
          subscribed={subscribed}
          onSubscribe={onSubscribe}
        />
      </div>
      <div>
        <h1 className="podcast-info__title">{title}</h1>
        <p className="podcast-info__author">{author}</p>
        <p className="podcast-info__description">{summary}</p>
      </div>
    </div>
  );
};

export default PodcastInfo;
