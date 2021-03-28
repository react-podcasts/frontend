import React from 'react';
import PropTypes from 'prop-types';
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

PodcastHead.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  coverUrl600: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  subscribed: PropTypes.bool.isRequired,
  onSubscribe: PropTypes.func.isRequired
};

export default PodcastHead;
