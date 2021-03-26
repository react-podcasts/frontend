import React from 'react';
import PodcastCard from '../podcast-card';
import './podcasts-grid.css';

const PodcastsGrid = ({ podcasts }) => {
  return (
    <ul className="podcasts-grid">
      {
        podcasts.map((podcast) => {
          return (
            <li key={podcast.id}>
              <PodcastCard {...podcast} />
            </li>
          );
        })
      }
    </ul>
  );
}

export default PodcastsGrid;
