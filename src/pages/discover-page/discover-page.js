import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoverPageData } from '../../actions/discover-page';
import * as selectors from '../../selectors/discover-page';
import Subhead from '../../components/ui/subhead';
import Heading from '../../components/ui/heading';
import Loader from '../../components/ui/loader';
import Blankslate from '../../components/common/blankslate';
import PodcastsGrid from '../../components/common/podcasts-grid';

const DiscoverPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.discoverLoadingSelector);
  const error = useSelector(selectors.discoverErrorSelector);
  const podcasts = useSelector(selectors.discoverPodcastsSelector);

  useEffect(() => {
    if (podcasts.length === 0) {
      dispatch(getDiscoverPageData('all', 18));
    }
  }, [dispatch, podcasts.length]);

  if (error) {
    return (
      <Blankslate
        title="Oops... something went wrong"
        text="There was a problem loading the podcasts."
      />
    );
  }

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <section>
      <Subhead>
        <Heading as="h2" size="h4">
          Top Podcasts in Russia
        </Heading>
      </Subhead>
      <PodcastsGrid podcasts={podcasts} />
    </section>
  );
};

export default DiscoverPage;
