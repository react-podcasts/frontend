import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPodcastPageData } from '../../actions/podcast-page';
import EpisodeInfo from '../../components/episode-info';
import EpisodeNotes from '../../components/episode-notes';

const EpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const dispatch = useDispatch();
  const { loading, error, data: {
    id, title: podcastTitle, coverUrl600, author, episodes
  } } = useSelector(state => state.podcastPage);

  useEffect(() => {
    if (podcastId !== id) {
      dispatch(getPodcastPageData(podcastId));
    }
  }, [dispatch, podcastId, id]);

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

  const episode = episodes.find(i => i.id === episodeId);
  const { title, published, description, url, duration } = episode;

  return (
    <div>
      <EpisodeInfo
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
