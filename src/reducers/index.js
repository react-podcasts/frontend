import { combineReducers } from 'redux';
import { search } from './search';
import { podcastPage } from './podcast-page';

const rootReducer = combineReducers({
  search,
  podcastPage
});

export default rootReducer;
