import { FETCH_PODCASTS_REQUEST, FETCH_PODCASTS_FAILURE, FETCH_PODCASTS_SUCCESS } from '../types/search';

const initialState = {
  loading: false,
  error: null,
  term: '',
  results: []
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PODCASTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        term: action.term,
        results: []
      };
    case FETCH_PODCASTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        results: []
      };
    case FETCH_PODCASTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        results: action.data
      };
    default:
      return state;
  }
};
