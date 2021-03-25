import React from 'react';
import Heading from '../../ui/heading';
import SubscribeButton from '../subscribe-button';
import './podcast-info.css';

const PodcastInfo = ({ coverUrl600, title, author, summary, link, subscribed, onSubscribe }) => {
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
        <div className="podcast-info__title">
          <Heading size="h4">{title}</Heading>
        </div>
        <p className="podcast-info__author">{author}</p>
        <a
          className="podcast-info__link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >{link}</a>
        <p className="podcast-info__description">{summary}</p>
      </div>
    </div>
  );
};

export default PodcastInfo;
