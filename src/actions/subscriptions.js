import * as types from '../types/subscriptions';

const subscriptionsAddPodcast = (podcastData) => ({
  type: types.SUBSCRIPTIONS_ADD_PODCAST,
  podcastData
});

const subscriptionsRemovePodcast = (podcastId) => ({
  type: types.SUBSCRIPTIONS_REMOVE_PODCAST,
  podcastId
});

export const subscriptionsChange = (podcastId) => (dispatch, getState) => {
  const { subscriptions, podcastPage } = getState();
  const { title, coverUrl600 } = podcastPage.data;
  const subscribed = subscriptions.findIndex(s => s.id === podcastId) !== -1;

  if (subscribed) {
    dispatch(subscriptionsRemovePodcast(podcastId));
  } else {
    const podcastData = {
      id: podcastId,
      title,
      coverUrl600
    };
    dispatch(subscriptionsAddPodcast(podcastData));
  }
};
