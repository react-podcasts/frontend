import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPodcastPageData } from '../../actions/podcast-page';
import { playerPlayControl } from '../../actions/player';
import { subscriptionsChange } from '../../actions/subscriptions';
import { hasInSubscriptionsSelector } from '../../selectors/subscriptions';
import PodcastInfo from '../../components/podcast-info';
import EpisodesList from '../../components/episodes-list';

const PodcastPage = () => {
  const { podcastId } = useParams();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(state => state.podcastPage);
  const { playing, episodeId } = useSelector(state => state.player);
  const subscribed = useSelector(hasInSubscriptionsSelector);
  const { id, coverUrl600, title, author, summary, episodes } = data;

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
        author={author}
        summary={summary}
        subscribed={subscribed}
        onSubscribe={onSubscribe}
      />
      <EpisodesList
        episodes={episodes}
        playing={playing}
        playingEpisodeId={episodeId}
        onPlayControl={(id) => dispatch(playerPlayControl(id))}
      />
    </>
  );
};

export default PodcastPage;
