import { fetchDataById } from '../services/search';
import { fetchPodcastPageData } from '../services/rss';
import * as types from '../types/podcast-page';

const podcastPageRequested = () => ({
  type: types.FETCH_PODCAST_PAGE_REQUEST
});

const podcastPageError = (error) => ({
  type: types.FETCH_PODCAST_PAGE_FAILURE,
  error
});

const podcastPageSuccess = (data) => ({
  type: types.FETCH_PODCAST_PAGE_SUCCESS,
  data
});

export const getPodcastPageData = (podcastId) => (dispatch) => {
  let podcastData = {};

  dispatch(podcastPageRequested());
  fetchDataById(podcastId)
    .then(({ feed, ...rest }) => {
      podcastData = { ...rest };
      return fetchPodcastPageData(feed);
    })
    .then(data => {
      podcastData = { ...podcastData, ...data };
      dispatch(podcastPageSuccess(podcastData));
    })
    .catch(error => dispatch(podcastPageError(error)));
};
