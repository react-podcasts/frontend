import { fetchPodcasts } from '../services/search';
import * as types from '../types/search';

const podcastsRequested = (term) => ({
  type: types.FETCH_PODCASTS_REQUEST,
  term
});

const podcastsError = (error) => ({
  type: types.FETCH_PODCASTS_FAILURE,
  error
});

const podcastsLoaded = (data) => ({
  type: types.FETCH_PODCASTS_SUCCESS,
  data
});

export const clearSearchTerm = () => ({
  type: types.CLEAR_SEARCH_TERM
});

export const findPodcasts = (term) => (dispatch) => {
  dispatch(podcastsRequested(term));
  fetchPodcasts(term)
    .then(data => dispatch(podcastsLoaded(data)))
    .catch(error => dispatch(podcastsError(error)));
};
