import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../ui/heading';
import PlayControl from '../../common/play-control';
import './episode-head.css';

const EpisodeHead = (props) => {
  const { podcastId, episodeId, podcastTitle, episodeTitle, coverUrl600, published, url, duration } = props;

  return (
    <div className="episode-head">
      <div className="episode-head__cover">
        <img
          className="episode-head__image"
          src={coverUrl600}
          width="210"
          height="210"
          alt={podcastTitle}
        />
        <div className="episode-head__button">
          <PlayControl
            selectedEpisodeData={{
              episodeId,
              title: episodeTitle,
              duration,
              published,
              url,
              podcastId,
              podcastTitle,
              coverUrl600
            }}
          />
        </div>
      </div>
      <div>
        <Link
          className="episode-head__author"
          to={`/podcast/${podcastId}`}
        >{podcastTitle}</Link>
        <div className="episode-head__title">
          <Heading size="h5">{episodeTitle}</Heading>
        </div>
        <p className="episode-head__published">{published}</p>
      </div>
    </div>
  );
};

export default EpisodeHead;
