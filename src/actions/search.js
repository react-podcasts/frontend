import { fetchPodcasts } from '../services/search';
import * as types from '../types/search';

const searchRequested = (term) => ({
  type: types.FETCH_SEARCH_REQUEST,
  term
});

const searchError = (error) => ({
  type: types.FETCH_SEARCH_FAILURE,
  error
});

const searchLoaded = (data) => ({
  type: types.FETCH_SEARCH_SUCCESS,
  data
});

export const clearSearchTerm = () => ({
  type: types.CLEAR_SEARCH_TERM
});

export const findPodcasts = (term) => (dispatch) => {
  dispatch(searchRequested(term));
  fetchPodcasts(term)
    .then(data => dispatch(searchLoaded(data)))
    .catch(error => dispatch(searchError(error)));
};
