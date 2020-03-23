import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SelectProvider from './context/PocemonContext'
import SearchProvider from './context/SearchContext'
import './App.css';

import Home from './screens/Home'
import Profile from './screens/Profile'

import MenuBar from './components/menus/MenuBar'

function App() {
  return (
      <SelectProvider>
        <SearchProvider>
      <Router>
      <MenuBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
    </SearchProvider>
    </SelectProvider>
  );
}

export default App;
