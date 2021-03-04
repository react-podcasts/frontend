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
