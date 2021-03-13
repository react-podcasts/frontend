import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const localStorageKey = 'react-podcasts';
const persistedState = localStorage.getItem(localStorageKey);
let preloadedState;

if (persistedState) {
  preloadedState = {
    ...JSON.parse(persistedState)
  };
}

const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

store.subscribe(() => {
  const { subscriptions, listeningHistory } = store.getState();
  localStorage.setItem(localStorageKey, JSON.stringify({
    subscriptions,
    listeningHistory
  }));
});

export default store;
