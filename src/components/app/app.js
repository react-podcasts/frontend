import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../header';
import PodcastPage from '../../pages/podcast-page';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Switch>
          <Route path="/" exact render={() => <p>Home Page</p>} />
          <Route path="/podcast/:podcastId" component={PodcastPage} />
          <Route path="/discovery" render={() => <p>Discovery Page</p>} />
          <Route path="/new-releases" render={() => <p>New Releases Page</p>} />
          <Route path="/in-progress" render={() => <p>In Progress Page</p>} />
          <Route path="/starred" render={() => <p>Starred Page</p>} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
