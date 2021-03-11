import React from 'react';
import DiscoverList from '../discover-list';
import './discover-section.css';

const DiscoverSection = ({ title, podcasts }) => {
  return (
    <section className="discover-section">
      <h2 className="discover-section__title">{title}</h2>
      <DiscoverList podcasts={podcasts} />
    </section>
  );
};

export default DiscoverSection;
