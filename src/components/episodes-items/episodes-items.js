import React from 'react';
import EpisodeCard from '../episode-card';
import './episodes-items.css';

const EpisodesItems = ({ history, playing, playingEpisodeId, onPlayControl }) => {
  return (
    <ul className="episodes-items">
      { history.map((item) => {
        return (
          <EpisodeCard
            key={item.episodeId}
            {...item}
            playing={playing}
            playingEpisodeId={playingEpisodeId}
            onPlayControl={onPlayControl}
          />
        );
      }) }
    </ul>
  );
};

export default EpisodesItems;
