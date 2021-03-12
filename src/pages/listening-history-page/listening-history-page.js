import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playerPlayControl } from '../../actions/player';
import EpisodesItems from '../../components/episodes-items';

const ListeningHistoryPage = () => {
  const dispatch = useDispatch();
  const history = useSelector(state => state.listeningHistory);
  const { playing, episodeId } = useSelector(state => state.player);

  if (history.length === 0) {
    return (
      <p>Listening history empty</p>
    );
  }

  return (
    <section>
      <h2>Listening History</h2>
      <EpisodesItems
        history={history}
        playing={playing}
        playingEpisodeId={episodeId}
        onPlayControl={(id) => dispatch(playerPlayControl(id))}
      />
    </section>
  );
};

export default ListeningHistoryPage;
