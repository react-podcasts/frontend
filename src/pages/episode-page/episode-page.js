import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPodcastPageData } from '../../actions/podcast-page';
import { podcastPageDataSelector } from '../../selectors/podcast-page';
import Loader from '../../components/ui/loader';
import Blankslate from '../../components/common/blankslate';
import EpisodeHead from '../../components/episodes/episode-head';
import EpisodeNotes from '../../components/episodes/episode-notes';

const EpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.podcastPage.loading);
  const error = useSelector(state => state.podcastPage.error);
  const podcastPageData = useSelector(podcastPageDataSelector);
  const { id, title: podcastTitle, coverUrl600, author, episodes } = podcastPageData;
  const episode = episodes.find(i => i.id === episodeId) || episodes[0];
  const { title, published, description, url, duration } = episode;

  useEffect(() => {
    if (podcastId !== id) {
      dispatch(getPodcastPageData(podcastId));
    }
  }, [dispatch, podcastId, id]);

  if (error) {
    return (
      <Blankslate
        title="Oops... something went wrong"
        text="There was a problem loading the podcasts."
      />
    );
  }

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div>
      <EpisodeHead
        podcastId={podcastId}
        episodeId={episodeId}
        episodeTitle={title}
        podcastTitle={podcastTitle}
        coverUrl600={coverUrl600}
        published={published}
        duration={duration}
        url={url}
        author={author}
      />
      <EpisodeNotes description={description} />
    </div>
  );
};

export default EpisodePage;
