import React from 'react';
import Heading from '../../ui/heading';
import SubscribeButton from '../subscribe-button';
import './podcast-head.css';

const PodcastHead = (props) => {
  const { coverUrl600, title, author, summary, link, subscribed, onSubscribe } = props;

  return (
    <div className="podcast-head">
      <div>
        <img
          className="podcast-head__image"
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
        <div className="podcast-head__title">
          <Heading size="h4">{title}</Heading>
        </div>
        <p className="podcast-head__author">{author}</p>
        <a
          className="podcast-head__link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >{link}</a>
        <p className="podcast-head__description">{summary}</p>
      </div>
    </div>
  );
};

export default PodcastHead;
