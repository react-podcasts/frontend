import React from 'react';
import EpisodeCard from '../../episodes/episode-card';
import './episodes-items.css';

const EpisodesItems = ({ history }) => {
  return (
    <ul className="episodes-items">
      { history.map((item) => {
        return (
          <li className="episodes-items__item" key={item.episodeId}>
            <EpisodeCard {...item} />
          </li>
        );
      }) }
    </ul>
  );
};

export default EpisodesItems;
