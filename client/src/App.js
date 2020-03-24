import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SelectProvider from './context/PocemonContext'
import SearchProvider from './context/SearchContext'
import { useFetch } from './hooks/useFetch'
import './App.css';

import Home from './screens/Home'
import Profile from './screens/Profile'

import MenuBar from './components/menus/MenuBar'

function App() {

  const { pokemonData, loading, prev, next } = useFetch()



  return (
    <SelectProvider>
      <SearchProvider>
        <Router>
          <MenuBar
            pokemonData={pokemonData}
            loading={loading}
            prev={prev}
            next={next}
          />
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
