import React from 'react';
import { useSelector } from 'react-redux';
import Subhead from '../../components/ui/subhead';
import Heading from '../../components/ui/heading';
import Blankslate from '../../components/common/blankslate';
import EpisodesItems from '../../components/episodes/episodes-items';

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
      <Subhead>
        <Heading size="h4">Listening History</Heading>
      </Subhead>
      <EpisodesItems history={history} />
    </section>
  );
};

export default ListeningHistoryPage;
