import { fetchPodcasts } from '../services/search';
import { FETCH_PODCASTS_REQUEST, FETCH_PODCASTS_FAILURE, FETCH_PODCASTS_SUCCESS } from '../types/search';

const podcastsRequested = (term) => ({
  type: FETCH_PODCASTS_REQUEST,
  term
});

const podcastsError = (error) => ({
  type: FETCH_PODCASTS_FAILURE,
  error
});

const podcastsLoaded = (data) => ({
  type: FETCH_PODCASTS_SUCCESS,
  data
});

export const findPodcasts = (term) => (dispatch) => {
  dispatch(podcastsRequested(term));
  fetchPodcasts(term)
    .then(data => dispatch(podcastsLoaded(data)))
    .catch(error => dispatch(podcastsError(error)));
};
