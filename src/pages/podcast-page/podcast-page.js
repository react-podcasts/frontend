import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPodcastPageData } from '../../actions/podcast-page';
import PodcastInfo from '../../components/podcast-info';
import EpisodesList from '../../components/episodes-list';

const PodcastPage = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(state => state.podcastPage);
  const { coverUrl600, title, author, summary, episodes } = data;
  const { podcastId } = useParams();

  useEffect(() => {
    dispatch(getPodcastPageData(podcastId));
  }, [dispatch, podcastId]);

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
      />
      <EpisodesList episodes={episodes} />
    </>
  );
};

export default PodcastPage;
