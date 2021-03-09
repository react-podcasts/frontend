import React from 'react';
import { useSelector } from 'react-redux';
import SubscriptionsList from '../../components/subscriptions-list';

const HomePage = () => {
  const subscriptions = useSelector(state => state.subscriptions);

  if (subscriptions.length === 0) {
    return (
      <p>You don't have any podcasts!</p>
    );
  }

  return (
    <SubscriptionsList subscriptions={subscriptions} />
  );
};

export default HomePage;
