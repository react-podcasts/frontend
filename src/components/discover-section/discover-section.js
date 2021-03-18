import React from 'react';
import DiscoverList from '../discover-list';
import Heading from '../heading';
import './discover-section.css';

const DiscoverSection = ({ title, podcasts }) => {
  return (
    <section className="discover-section">
      <div className="discover-section__title">
        <Heading as="h2" size="h4">{title}</Heading>
      </div>
      <DiscoverList podcasts={podcasts} />
    </section>
  );
};

export default DiscoverSection;
