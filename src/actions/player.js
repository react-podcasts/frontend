import * as types from '../types/player';

export const loadEpisodeData = (data) => ({
  type: types.PLAYER_LOAD_EPISODE_DATA,
  data
});

export const playerCanPlayThrough = () => ({
  type: types.PLAYER_CAN_PLAY_THROUGH
});

export const playerPlay = () => ({
  type: types.PLAYER_PLAY
});

export const playerPause = () => ({
  type: types.PLAYER_PAUSE
});

export const playerUpdateTime = (currentTime) => ({
  type: types.PLAYER_UPDATE_TIME,
  currentTime
});

export const playerChangeVolume = (volume) => ({
  type: types.PLAYER_CHANGE_VOLUME,
  volume
});

export const playerToggleMute = () => ({
  type: types.PLAYER_TOGGLE_MUTE
});

export const playerChangePlaybackRate = (value) => ({
  type: types.PLAYER_CHANGE_PLAYBACK_RATE,
  value
});
