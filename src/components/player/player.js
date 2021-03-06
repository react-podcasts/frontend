import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/player';
import { secondsToHms } from '../../utils/time';
import Range from '../range';
import PlayControl from '../play-control';
import SkipControl from '../skip-control';
import VolumeControl from '../volume-control';
import './player.css';

const Player = () => {
  const audio = useRef();
  const dispatch = useDispatch();
  const {
    show, loading, playing, src, title, coverUrl600, author, duration, currentTime, volume, muted
  } = useSelector(state => state.player);
  const playControlType = playing ? 'pause' : 'play';

  const playerChangePlaying = () => {
    if (playing) {
      dispatch(actions.playerPause());
    } else {
      dispatch(actions.playerPlay());
    }
  };

  const playerTimeUpdate = () => {
    const time = audio.current.currentTime;
    dispatch(actions.playerUpdateTime(time));
  };

  const playerChangeVolume = () => {
    const value = audio.current.volume;
    dispatch(actions.playerChangeVolume(value));
  };

  const handleProgressChange = (event) => {
    const time = event.target.value;
    audio.current.currentTime = time;
  }

  const handleChangeVolume = (event) => {
    const volume = event.target.value;
    audio.current.volume = volume;
  };

  const handleToggleMute = () => {
    audio.current.muted = !muted;
    dispatch(actions.playerToggleMute());
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
        currenttime={currentTime}
        onCanPlayThrough={() => dispatch(actions.playerCanPlayThrough())}
        onVolumeChange={playerChangeVolume}
        onTimeUpdate={playerTimeUpdate}
        loop={false}
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
            <SkipControl
              type="prev"
              onClick={() => audio.current.currentTime -= 15 }
            />
            <PlayControl
              type={playControlType}
              theme="fill"
              onClick={playerChangePlaying}
            />
            <SkipControl
              type="next"
              onClick={() => audio.current.currentTime += 30 }
            />
          </div>
          <div className="player__controls">
            <div className="player__info">
              <h3 className="player__title">{title}</h3>
              <p className="player__author">{author}</p>
            </div>
            <div className="player__progress">
              <span className="player__time">{secondsToHms(currentTime)}</span>
              <Range
                min="0"
                max={duration}
                step={1}
                value={currentTime}
                onChange={handleProgressChange}
              />
              <span className="player__time player__time--full">
                -{secondsToHms(duration - currentTime)}
              </span>
            </div>
          </div>
          <div className="player__volume">
            <VolumeControl
              value={volume}
              muted={muted}
              toggleMute={handleToggleMute}
              onChange={handleChangeVolume}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default Player;
