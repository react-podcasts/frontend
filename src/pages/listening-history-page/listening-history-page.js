import React from 'react';
import { useSelector } from 'react-redux';
import EpisodesItems from '../../components/episodes-items';

const ListeningHistoryPage = () => {
  const history = useSelector(state => state.listeningHistory);

  if (history.length === 0) {
    return (
      <p>Listening history empty</p>
    );
  }

  return (
    <section>
      <h2>Listening History</h2>
      <EpisodesItems history={history} />
    </section>
  );
};

export default ListeningHistoryPage;
