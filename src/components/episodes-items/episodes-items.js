import React from 'react';
import EpisodeCard from '../episode-card';
import './episodes-items.css';

const EpisodesItems = ({ history }) => {
  return (
    <ul className="episodes-items">
      { history.map((item) => {
        return (
          <EpisodeCard key={item.episodeId} {...item} />
        );
      }) }
    </ul>
  );
};

export default EpisodesItems;
