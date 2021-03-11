import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoverPageData } from '../../actions/discover-page';
import DiscoverSection from '../../components/discover-section';

const DiscoverPage = () => {
  const dispatch = useDispatch();
  const { loading, error, podcasts } = useSelector(state => state.discoverPage);

  useEffect(() => {
    if (podcasts.length === 0) {
      dispatch(getDiscoverPageData('all', 18));
    }
  }, [dispatch, podcasts.length]);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error) {
    return (
      <p>Error!</p>
    );
  }

  return (
    <DiscoverSection
      title="Top Podcasts in Russia"
      podcasts={podcasts}
    />
  );
};

export default DiscoverPage;
