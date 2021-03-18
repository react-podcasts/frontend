import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/player';
import { secondsToHms } from '../../utils/time';
import Range from '../range';
import SkipControl from './skip-control';
import SpeedControl from './speed-control';
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

  const onCanPlayThrough = () => {
    audio.current.play();
    dispatch(actions.playerCanPlayThrough());
  };

  const onPlay = () => {
    audio.current.currentTime = currentTime;
  };

  const onTimeUpdate = () => {
    const time = Math.round(audio.current.currentTime);
    dispatch(actions.playerUpdateTime(episodeId, time));
  };

  const onVolumeChange = () => {
    const { volume, muted: audioMuted } = audio.current;

    if (audioMuted !== muted) {
      dispatch(actions.playerToggleMute());
    } else {
      dispatch(actions.playerChangeVolume(volume));
    }
  };

  const onRateChange = () => {
    const value = audio.current.playbackRate;
    dispatch(actions.playerChangePlaybackRate(value));
  };

  const handleProgressChange = (event) => {
    const time = event.target.value;
    audio.current.currentTime = time;
  }

  const handleVolumeChange = (event) => {
    const volume = event.target.value;
    audio.current.volume = volume;
  };

  const handleMuteToggle = () => {
    audio.current.muted = !muted;
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
        ref={audio}
        src={url}
        onCanPlayThrough={onCanPlayThrough}
        onPlay={onPlay}
        onTimeUpdate={onTimeUpdate}
        onVolumeChange={onVolumeChange}
        onRateChange={onRateChange}
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
            <SkipControl ref={audio} value={-15} />
            <PlayControl
              theme="fill"
              selectedEpisodeData={{
                episodeId
              }}
            />
            <SkipControl ref={audio} value={30} />
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
          <SpeedControl ref={audio} />
          <div className="player__volume">
            <VolumeControl
              value={volume}
              muted={muted}
              toggleMute={handleMuteToggle}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default Player;
