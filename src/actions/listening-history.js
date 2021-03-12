import * as types from '../types/listening-history';

export const addEpisodeToHistory = (episodeData) => (dispatch, getState) => {
  const { listeningHistory } = getState();
  const { episodeId } = episodeData;
  const hasInListeningHistory = listeningHistory.find(e => e.episodeId === episodeId);

  if (!hasInListeningHistory) {
    dispatch({
      type: types.HISTORY_ADD_EPISODE,
      episodeData
    });
  }
};

export const updateEpisodeTimeInHistory = (episodeId, currentTime) => ({
  type: types.HISTORY_UPDATE_EPISODE_TIME,
  episodeId,
  currentTime
});
