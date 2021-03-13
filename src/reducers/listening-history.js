import * as types from '../types/listening-history';

const initialState = [];

export const listeningHistory = (state = initialState, action) => {
  switch (action.type) {
    case types.HISTORY_ADD_EPISODE:
      return [
        action.episodeData,
        ...state
      ];
    case types.HISTORY_UPDATE_EPISODE_TIME: {
      const { episodeId, currentTime } = action;
      const episodeIndex = state.findIndex(e => e.episodeId === episodeId);

      const newState = [...state];
      newState[episodeIndex].currentTime = currentTime;

      return newState;
    }
    default:
      return state;
  }
};
