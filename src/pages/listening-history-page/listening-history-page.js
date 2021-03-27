import React from 'react';
import { useSelector } from 'react-redux';
import Subhead from '../../components/ui/subhead';
import Heading from '../../components/ui/heading';
import Blankslate from '../../components/common/blankslate';
import { EpisodeList, EpisodeListItem } from '../../components/episodes/episode-list';
import EpisodeCard from '../../components/episodes/episode-card';

const ListeningHistoryPage = () => {
  const history = useSelector(state => state.history);

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
      <EpisodeList>
        {
          history.map((episode) => {
            return (
              <EpisodeListItem key={episode.episodeId}>
                <EpisodeCard
                  episodeData={{
                    ...episode
                  }}
                />
              </EpisodeListItem>
            );
          })
        }
      </EpisodeList>
    </section>
  );
};

export default ListeningHistoryPage;
