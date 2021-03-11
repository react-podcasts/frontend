import * as types from '../types/player';

const loadEpisodeData = (data) => ({
  type: types.PLAYER_LOAD_EPISODE_DATA,
  data
});

const playerPlay = () => ({
  type: types.PLAYER_PLAY
});

const playerPause = () => ({
  type: types.PLAYER_PAUSE
});

export const playerCanPlayThrough = () => ({
  type: types.PLAYER_CAN_PLAY_THROUGH
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

export const playerPlayControl = (id) => (dispatch, getState) => {
  const { player, podcastPage } = getState();
  const { playing, episodeId } = player;
  const { episodes, coverUrl600, title, id: podcastId } = podcastPage.data;

  if (playing && episodeId === id) {
    dispatch(playerPause());
  } else if (!playing && id === episodeId) {
    dispatch(playerPlay());
  } else {
    const episode = episodes.find(e => e.id === id);
    const episodeData = {
      episodeId: episode.id,
      src: episode.url,
      duration: episode.duration,
      title: episode.title,
      coverUrl600,
      author: title,
      podcastId
    };
    dispatch(loadEpisodeData(episodeData));
  }
};
