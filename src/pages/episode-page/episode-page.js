import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPodcastPageData } from '../../actions/podcast-page';
import { playerPlayControl } from '../../actions/player';
import EpisodeInfo from '../../components/episode-info';
import EpisodeNotes from '../../components/episode-notes';

const EpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const dispatch = useDispatch();
  const { loading, error, data: {
    id, title: podcastTitle, coverUrl600, episodes
  } } = useSelector(state => state.podcastPage);
  const { playing, episodeId: playingEpisodeId } = useSelector(state => state.player);

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
  const { title, published, description } = episode;

  return (
    <div>
      <EpisodeInfo
        podcastId={podcastId}
        episodeId={episodeId}
        episodeTitle={title}
        podcastTitle={podcastTitle}
        coverUrl600={coverUrl600}
        published={published}
        playing={playing}
        playingEpisodeId={playingEpisodeId}
        onPlayControl={(id) => dispatch(playerPlayControl(id))}
      />
      <EpisodeNotes description={description} />
    </div>
  );
};

export default EpisodePage;
