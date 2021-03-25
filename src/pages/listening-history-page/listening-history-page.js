import React from 'react';
import { useSelector } from 'react-redux';
import Heading from '../../components/ui/heading';
import EpisodesItems from '../../components/episodes/episodes-items';
import Blankslate from '../../components/common/blankslate';

const ListeningHistoryPage = () => {
  const history = useSelector(state => state.listeningHistory);

  if (history.length === 0) {
    return (
      <Blankslate
        title="Once upon a time..."
        text="All your played episodes will appear here."
      />
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
