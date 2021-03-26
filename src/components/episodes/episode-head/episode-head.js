import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { playerPlayControl } from '../../../actions/player';
import Heading from '../../ui/heading';
import Button from '../../ui/button';
import './episode-head.css';

const EpisodeHead = (props) => {
  const { podcastId, episodeId, podcastTitle, episodeTitle, coverUrl600, published, url, duration } = props;
  const dispatch = useDispatch();
  const playing = useSelector(state => state.player.playing);
  const playingEpisodeId = useSelector(state => state.player.episodeId);
  const selectedEpisodeData={
    episodeId,
    title: episodeTitle,
    duration,
    published,
    url,
    podcastId,
    podcastTitle,
    coverUrl600
  };
  const buttonText = playing && episodeId === playingEpisodeId ? 'Pause' : 'Play';

  const handleClick = () => dispatch(playerPlayControl(selectedEpisodeData));

  return (
    <div className="episode-head">
      <div>
        <img
          className="episode-head__image"
          src={coverUrl600}
          width="210"
          height="210"
          alt={podcastTitle}
        />
        <Button onClick={handleClick}>{buttonText}</Button>
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
