import * as types from '../types/discover-page';

const initialState = {
  loading: false,
  error: null,
  podcasts: []
};

export const discoverPage = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DISCOVER_PAGE_REQUEST:
      return {
        loading: true,
        error: null,
        podcasts: []
      };
    case types.FETCH_DISCOVER_PAGE_FAILURE:
      return {
        loading: false,
        error: action.error,
        podcasts: []
      };
    case types.FETCH_DISCOVER_PAGE_SUCCESS:
      return {
        loading: false,
        error: null,
        podcasts: action.data
      };
    default:
      return state;
  }
};
