import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPodcastPageData } from '../../actions/podcast-page';
import { loadEpisodeData, playerPause, playerPlay } from '../../actions/player';
import PodcastInfo from '../../components/podcast-info';
import EpisodesList from '../../components/episodes-list';

const PodcastPage = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(state => state.podcastPage);
  const { playing, episodeId } = useSelector(state => state.player);
  const { coverUrl600, title, author, summary, episodes } = data;
  const { podcastId } = useParams();

  useEffect(() => {
    dispatch(getPodcastPageData(podcastId));
  }, [dispatch, podcastId]);

  const onPlayEpisode = (id) => {
    if (id === episodeId) {
      dispatch(playerPlay());
    } else {
      const episode = episodes.find(e => e.id === id);
      const episodeData = {
        episodeId: episode.id,
        src: episode.url,
        duration: episode.duration,
        title: episode.title,
        coverUrl600,
        author
      };
      dispatch(loadEpisodeData(episodeData));
    }
  };

  const onPauseEpisode = () => {
    dispatch(playerPause());
  }

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
      <EpisodesList
        episodes={episodes}
        playing={playing}
        playingEpisodeId={episodeId}
        onPlay={onPlayEpisode}
        onPause={onPauseEpisode}
      />
    </>
  );
};

export default PodcastPage;
