import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { secondsToString } from '../../../utils/time';
import PlayControl from '../../common/play-control';
import './episode-card.css';

const EpisodeCard = ({ episodeData, noImage, noPodcastLink }) => {
  const {
    podcastId,
    episodeId,
    title,
    podcastTitle,
    coverUrl600,
    duration,
    published,
    url,
    season,
    number,
    episodeType
  } = episodeData;
  const titleClass = classNames('episode-card__title', {
    'episode-card__title--regular': noPodcastLink
  });

  const getEpisodeIndex = () => {
    let index = '';

    if (season) {
      index += `S${season} `;
    }

    if (number) {
      index += `E${number}`;
    }

    if (episodeType && episodeType !== 'full') {
      index = episodeType.toUpperCase();
    }

    return index;
  };

  const episodeIndex = getEpisodeIndex();
  const episodeCardClass = classNames('episode-card', {
    'episode-card--noindex': noImage && !episodeIndex
  });

  return (
    <div className={episodeCardClass}>
      { !noImage &&
        <img
          className="episode-card__image"
          src={coverUrl600}
          width="60"
          height="60"
          alt={title}
        />
      }
      { noImage && episodeIndex &&
        <span className="episode-card__index">{episodeIndex}</span>
      }
      <div>
        <h3 className={titleClass}>
          <Link
            className="episode-card__link"
            to={`/podcast/${podcastId}/${episodeId}`}
          >{title}</Link>
        </h3>
        { !noPodcastLink &&
          <p className="episode-card__author">
            <Link
              className="episode-card__link"
              to={`/podcast/${podcastId}`}
            >{podcastTitle}</Link>
          </p>
        }
      </div>
      <p className="episode-card__published">{published}</p>
      <span className="episode-card__duration">
        {secondsToString(duration)}
      </span>
      <PlayControl
        selectedEpisodeData={{
          episodeId,
          title,
          duration,
          published,
          url,
          podcastId,
          podcastTitle,
          coverUrl600
        }}
      />
    </div>
  );
};

export default EpisodeCard;
