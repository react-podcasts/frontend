import * as types from '../types/subscriptions';

const subscriptionsAddPodcast = (podcastData) => ({
  type: types.SUBSCRIPTIONS_ADD_PODCAST,
  podcastData
});

const subscriptionsRemovePodcast = (podcastId) => ({
  type: types.SUBSCRIPTIONS_REMOVE_PODCAST,
  podcastId
});

export const subscriptionsChange = (podcastId, subscribed) => (dispatch, getState) => {
  const { podcastPage } = getState();
  const { title, author, coverUrl600 } = podcastPage.data;

  if (subscribed) {
    dispatch(subscriptionsRemovePodcast(podcastId));
  } else {
    const podcastData = {
      id: podcastId,
      title,
      author,
      coverUrl600
    };
    dispatch(subscriptionsAddPodcast(podcastData));
  }
};
