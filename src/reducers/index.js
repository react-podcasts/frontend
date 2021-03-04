import { combineReducers } from 'redux';
import { search } from './search';
import { podcastPage } from './podcast-page';
import { player } from './player';

const rootReducer = combineReducers({
  search,
  podcastPage,
  player
});

export default rootReducer;
