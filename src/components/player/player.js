import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/player';
import { secondsToHms } from '../../utils/time';
import Range from '../range';
import PlayControl from '../play-control';
import SkipControl from '../skip-control';
import SpeedControl from '../speed-control';
import VolumeControl from '../volume-control';
import './player.css';

const Player = () => {
  const audio = useRef();
  const dispatch = useDispatch();
  const {
    show,
    loading,
    playing,
    src,
    title,
    coverUrl600,
    author,
    duration,
    currentTime,
    volume,
    muted,
    podcastId,
    playbackRate
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

  const handleRateChange = (value) => {
    const oldValue = +audio.current.playbackRate;
    const delta = +value;
    const result = (oldValue + delta).toFixed(1);
    audio.current.playbackRate = result;
  };

  const handleToggleRateChange = () => {
    let result;

    if (playbackRate < 1) {
      result = 1;
    } else if (playbackRate >= 1 && playbackRate < 1.5) {
      result = 1.5;
    } else if (playbackRate >= 1.5 && playbackRate < 2) {
      result = 2;
    } else if (playbackRate >= 2) {
      result = 1;
    }

    audio.current.playbackRate = result;
  };

  const playerRateChange = () => {
    const value = audio.current.playbackRate;
    dispatch(actions.playerChangePlaybackRate(value));
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
        onRateChange={playerRateChange}
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
              <Link
                className="player__author"
                to={`/podcast/${podcastId}`}
              >{author}</Link>
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
          <SpeedControl
            value={playbackRate}
            inc={() => handleRateChange(0.1)}
            dec={() => handleRateChange(-0.1)}
            toggle={handleToggleRateChange}
          />
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
