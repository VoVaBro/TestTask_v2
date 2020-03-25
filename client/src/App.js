import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PokemonContext } from './context/PokemonContext'
import { useFetch } from './hooks/useFetch'

import Home from './screens/Home'
import Profile from './screens/Profile'
import MenuBar from './components/menus/MenuBar'

import './App.css';

const App = () => {

  const { pokemonData, loading, prev, next, switchViews, switchType } = useFetch()

  return (
      <PokemonContext.Provider value={{ pokemonData, loading, prev, next, switchViews, switchType }}>
        <Router>
          <MenuBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
      </PokemonContext.Provider>
  );
}

export default App;
