import { combineReducers } from 'redux';
import { search } from './search';
import { podcastPage } from './podcast-page';
import { player } from './player';
import { subscriptions } from './subscriptions';

const rootReducer = combineReducers({
  search,
  podcastPage,
  subscriptions,
  player
});

export default rootReducer;
