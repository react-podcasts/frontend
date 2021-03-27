import { combineReducers } from 'redux';
import { search } from './search';
import { podcastPage } from './podcast-page';
import { player } from './player';
import { subscriptions } from './subscriptions';
import { discoverPage } from './discover-page';
import { history } from './history';

const rootReducer = combineReducers({
  search,
  podcastPage,
  subscriptions,
  player,
  discoverPage,
  history
});

export default rootReducer;
