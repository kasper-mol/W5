import React from 'react';
import AboutMe from './AboutMe.js'
import Nav from './Nav.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SongOverview from './components/SongOverview.js'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={SongOverview} />
          <Route path="/about" component={AboutMe} />
        </Switch>
      </div >
    </Router >
  );
}

export default App;
