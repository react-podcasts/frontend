import React from 'react';
import { useSelector } from 'react-redux';
import Heading from '../../components/heading';
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
      <Heading size="h4">Listening History</Heading>
      <EpisodesItems history={history} />
    </section>
  );
};

export default ListeningHistoryPage;
