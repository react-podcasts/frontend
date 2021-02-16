import * as types from '../types/search';

const initialState = {
  loading: false,
  error: null,
  term: '',
  results: []
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PODCASTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        term: action.term,
        results: []
      };
    case types.FETCH_PODCASTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        results: []
      };
    case types.FETCH_PODCASTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        results: action.data
      };
    case types.CLEAR_SEARCH_TERM:
      return initialState;
    default:
      return state;
  }
};
