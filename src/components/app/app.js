import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../header';
import Player from '../player';
import HomePage from '../../pages/home-page';
import PodcastPage from '../../pages/podcast-page';
import EpisodePage from '../../pages/episode-page';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/podcast/:podcastId" exact component={PodcastPage} />
          <Route path="/podcast/:podcastId/:episodeId" component={EpisodePage} />
          <Route path="/discovery" render={() => <p>Discovery Page</p>} />
          <Route path="/new-releases" render={() => <p>New Releases Page</p>} />
          <Route path="/in-progress" render={() => <p>In Progress Page</p>} />
          <Route path="/starred" render={() => <p>Starred Page</p>} />
        </Switch>
      </main>
      <Player />
    </div>
  );
};

export default App;
