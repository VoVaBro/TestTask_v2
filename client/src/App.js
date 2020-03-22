import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './screens/Home'
import Profile from './screens/Profile'

import MenuBar from './components/menus/MenuBar'

function App() {
  return (
    <Router>
      <MenuBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>


    </Router>
  );
}

export default App;
