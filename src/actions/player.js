import * as types from '../types/player';
import { addEpisodeToHistory, updateEpisodeTimeInHistory } from './listening-history';

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

export const playerUpdateTime = (currentTime) => (dispatch, getState) => {
  const { player: { episodeId } } = getState();

  dispatch({
    type: types.PLAYER_UPDATE_TIME,
    currentTime
  });
  dispatch(updateEpisodeTimeInHistory(episodeId, currentTime));
};

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
  const { player, podcastPage, listeningHistory } = getState();
  const { playing, episodeId } = player;
  const { episodes, coverUrl600, title, id: podcastId } = podcastPage.data;


  if (playing && episodeId === id) {
    dispatch(playerPause());
  } else if (!playing && id === episodeId) {
    dispatch(playerPlay());
  } else {
    const episode = episodes.find(e => e.id === id);
    const episodeDataFromHistory = listeningHistory.find(e => e.episodeId === id);
    const currentTime = episodeDataFromHistory ? episodeDataFromHistory.currentTime : 0;

    const episodeData = {
      episodeId: episode.id,
      src: episode.url,
      duration: episode.duration,
      title: episode.title,
      coverUrl600,
      author: title,
      podcastId,
      currentTime
    };

    const episodeDataForHistory = {
      ...episodeData,
      published: episode.published,
      currentTime: 0
    }

    dispatch(loadEpisodeData(episodeData));
    dispatch(addEpisodeToHistory(episodeDataForHistory));
  }
};
