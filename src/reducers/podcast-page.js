import * as types from '../types/podcast-page';

const initialState = {
  loading: false,
  error: null,
  data: {
    id: '',
    coverUrl600: '',
    title: '',
    author: '',
    summary: '',
    link: '',
    episodes: [
      {
        id: '',
        title: '',
        published: '',
        description: '',
        url: '',
        duration: 0
      }
    ]
  }
};

export const podcastPage = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PODCAST_PAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.FETCH_PODCAST_PAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case types.FETCH_PODCAST_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data
      };
    default:
      return state;
  }
};
