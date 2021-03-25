import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoverPageData } from '../../actions/discover-page';
import Loader from '../../components/ui/loader';
import DiscoverSection from '../../components/discover/discover-section';

const DiscoverPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.discoverPage.loading);
  const error = useSelector(state => state.discoverPage.error);
  const podcasts = useSelector(state => state.discoverPage.podcasts);

  useEffect(() => {
    if (podcasts.length === 0) {
      dispatch(getDiscoverPageData('all', 18));
    }
  }, [dispatch, podcasts.length]);

  if (loading) {
    return (
      <Loader />
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
