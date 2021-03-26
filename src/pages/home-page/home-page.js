import React from 'react';
import { useSelector } from 'react-redux';
import Blankslate from '../../components/common/blankslate';
import PodcastsGrid from '../../components/common/podcasts-grid';

const HomePage = () => {
  const subscriptions = useSelector(state => state.subscriptions);

  if (subscriptions.length === 0) {
    return (
      <Blankslate
        title="You don't have any podcasts!"
        text="Your collection of podcasts appears here, but it appears you don't have any yet! Head over to Discover and add some."
      />
    );
  }

  return (
    <PodcastsGrid podcasts={subscriptions} />
  );
};

export default HomePage;
