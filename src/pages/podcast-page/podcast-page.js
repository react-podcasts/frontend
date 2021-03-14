import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPodcastPageData } from '../../actions/podcast-page';
import { subscriptionsChange } from '../../actions/subscriptions';
import { hasInSubscriptionsSelector } from '../../selectors/subscriptions';
import PodcastInfo from '../../components/podcast-info';
import EpisodesList from '../../components/episodes-list';

const PodcastPage = () => {
  const { podcastId } = useParams();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(state => state.podcastPage);
  const subscribed = useSelector(hasInSubscriptionsSelector);
  const { id, coverUrl600, title, summary, episodes, link } = data;

  useEffect(() => {
    if (podcastId !== id) {
      dispatch(getPodcastPageData(podcastId));
    }
  }, [dispatch, podcastId, id]);

  const onSubscribe = () => {
    dispatch(subscriptionsChange(podcastId, subscribed));
  };

  if (error) {
    return (
      <p>Error!</p>
    );
  }

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <PodcastInfo
        coverUrl600={coverUrl600}
        title={title}
        summary={summary}
        link={link}
        subscribed={subscribed}
        onSubscribe={onSubscribe}
      />
      <EpisodesList
        podcastId={podcastId}
        podcastTitle={title}
        coverUrl600={coverUrl600}
        episodes={episodes}
      />
    </>
  );
};

export default PodcastPage;
