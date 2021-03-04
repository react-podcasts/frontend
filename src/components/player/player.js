import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerCanPlayThrough, playerPlay, playerPause } from '../../actions/player';
import Range from '../range';
import PlayControl from '../play-control';
import SkipControl from '../skip-control';
import './player.css';

const Player = () => {
  const audio = useRef();
  const dispatch = useDispatch();
  const { show, loading, playing, src, title, coverUrl600, author } = useSelector(state => state.player);
  const playControlType = playing ? 'pause' : 'play';

  const playerChangePlaying = () => {
    if (playing) {
      dispatch(playerPause());
    } else {
      dispatch(playerPlay());
    }
  };

  if (show && !loading && playing) {
    audio.current.play();
  } else if (show && !loading && !playing) {
    audio.current.pause();
  }

  if (!show) {
    return null;
  }

  return (
    <div className="player">
      <audio
        src={src}
        ref={audio}
        onCanPlayThrough={() => dispatch(playerCanPlayThrough())}
      />
      { loading ?
        <p className="player__spinner">Loading...</p>
        :
        <div className="player__inner">
          <img
            className="player__cover"
            src={coverUrl600}
            width="72"
            height="72"
            alt={`Podcast ${author} cover`}
          />
          <div className="player__play-controls">
            <SkipControl type="prev" />
            <PlayControl
              type={playControlType}
              theme="fill"
              onClick={playerChangePlaying}
            />
            <SkipControl type="next" />
          </div>
          <div className="player__controls">
            <div className="player__info">
              <h3 className="player__title">{title}</h3>
              <p className="player__author">{author}</p>
            </div>
            <div className="player__progress">
              <span className="player__time">38:03</span>
              <Range
                min="0"
                max="32"
                value="3"
                onChange={() => {}}
              />
              <span className="player__time">-1:08:30</span>
            </div>
          </div>
          <div className="player__volume">
            <Range
              min="0"
              max="10"
              value="3"
              onChange={() => {}}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default Player;
