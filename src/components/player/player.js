import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/player';
import { secondsToHms } from '../../utils/time';
import Range from '../range';
import SkipControl from '../skip-control';
import SpeedControl from '../speed-control';
import VolumeControl from '../volume-control';
import PlayControl from '../play-control';
import './player.css';

const Player = () => {
  const audio = useRef();
  const dispatch = useDispatch();
  const show = useSelector(state => state.player.show);
  const loading = useSelector(state => state.player.loading);
  const playing = useSelector(state => state.player.playing);
  const url = useSelector(state => state.player.url);
  const title = useSelector(state => state.player.title);
  const coverUrl600 = useSelector(state => state.player.coverUrl600);
  const duration = useSelector(state => state.player.duration);
  const currentTime = useSelector(state => state.player.currentTime);
  const volume = useSelector(state => state.player.volume);
  const muted = useSelector(state => state.player.muted);
  const podcastId = useSelector(state => state.player.podcastId);
  const podcastTitle = useSelector(state => state.player.podcastTitle);
  const episodeId = useSelector(state => state.player.episodeId);
  const playbackRate = useSelector(state => state.player.playbackRate);

  const playerCanPlayThrough = () => {
    dispatch(actions.playerCanPlayThrough());
    audio.current.play();
  };

  const playerPlay = () => {
    audio.current.currentTime = currentTime;
  };

  const playerTimeUpdate = () => {
    const time = Math.round(audio.current.currentTime);
    dispatch(actions.playerUpdateTime(episodeId, time));
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

  useEffect(() => {
    if (show && !loading && playing) {
      audio.current.play();
    } else if (show && !loading && !playing) {
      audio.current.pause();
    }
  }, [show, loading, playing]);

  if (!show) {
    return null;
  }

  return (
    <div className="player">
      <audio
        src={url}
        ref={audio}
        currenttime={currentTime}
        onPlay={playerPlay}
        onCanPlayThrough={playerCanPlayThrough}
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
            className="player__image"
            src={coverUrl600}
            width="72"
            height="72"
            alt={`Podcast ${podcastTitle} cover`}
          />
          <div className="player__play-controls">
            <SkipControl
              type="prev"
              onClick={() => audio.current.currentTime -= 15 }
            />
            <PlayControl
              theme="fill"
              selectedEpisodeData={{
                episodeId
              }}
            />
            <SkipControl
              type="next"
              onClick={() => audio.current.currentTime += 30 }
            />
          </div>
          <div className="player__controls">
            <div className="player__info">
              <h3 className="player__title">
                <Link
                  className="player__title-link"
                  to={`/podcast/${podcastId}/${episodeId}`}
                >
                  {title}
                </Link>
              </h3>
              <Link
                className="player__author"
                to={`/podcast/${podcastId}`}
              >
                {podcastTitle}
              </Link>
            </div>
            <div className="player__progress">
              <span className="player__time player__time--left">
                {secondsToHms(currentTime)}
              </span>
              <Range
                min="0"
                max={duration}
                step={1}
                value={currentTime}
                onChange={handleProgressChange}
              />
              <span className="player__time">
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
