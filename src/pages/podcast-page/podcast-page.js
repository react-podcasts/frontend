import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPodcastPageData } from '../../actions/podcast-page';
import { subscriptionsChange } from '../../actions/subscriptions';
import { hasInSubscriptionsSelector } from '../../selectors/subscriptions';
import { podcastPageDataSelector } from '../../selectors/podcast-page';
import Loader from '../../components/ui/loader';
import PodcastHead from '../../components/podcast/podcast-head';
import { EpisodeList, EpisodeListItem } from '../../components/episodes/episode-list';
import EpisodeCard from '../../components/episodes/episode-card';

const PodcastPage = () => {
  const { podcastId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.podcastPage.loading);
  const error = useSelector(state => state.podcastPage.error);
  const podcastPageData = useSelector(podcastPageDataSelector);
  const subscribed = useSelector(hasInSubscriptionsSelector);
  const { id, coverUrl600, title, author, summary, episodes, link } = podcastPageData;

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
      <Loader />
    );
  }

  return (
    <>
      <PodcastHead
        coverUrl600={coverUrl600}
        title={title}
        summary={summary}
        link={link}
        author={author}
        subscribed={subscribed}
        onSubscribe={onSubscribe}
      />
      <EpisodeList>
        {
          episodes.map((episode) => {
            return (
              <EpisodeListItem key={episode.id}>
                <EpisodeCard
                  noImage
                  noPodcastLink
                  episodeData={{
                    episodeId: episode.id,
                    podcastId,
                    coverUrl600,
                    podcastTitle: title,
                    ...episode
                  }}
                />
              </EpisodeListItem>
            );
          })
        }
      </EpisodeList>
    </>
  );
};

export default PodcastPage;
