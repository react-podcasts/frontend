import * as types from '../types/player';

const initialState = {
  show: false,
  loading: false,
  canPlayThrough: false,
  playing: false,
  src: '',
  duration: 0,
  currentTime: 0,
  title: '',
  coverUrl600: '',
  author: ''
};

export const player = (state = initialState, action) => {
  switch (action.type) {
    case types.PLAYER_LOAD_EPISODE_DATA:
      return {
        ...state,
        show: true,
        loading: true,
        canPlayThrough: false,
        playing: false,
        ...action.data
      };
    case types.PLAYER_CAN_PLAY_THROUGH:
      return {
        ...state,
        loading: false,
        canPlayThrough: true,
        playing: true
      };
    case types.PLAYER_PLAY:
      return {
        ...state,
        playing: true
      };
    case types.PLAYER_PAUSE:
      return {
        ...state,
        playing: false
      };
    case types.PLAYER_UPDATE_TIME:
      return {
        ...state,
        currentTime: action.currentTime
      };
    default:
      return state;
  }
};
