import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SelectProvider from './context/SelectContext'
import SearchProvider from './context/SearchContext'
import { useFetch } from './hooks/useFetch'
import PokemonViewFind from './components/menus/PokemonViewFind'

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
          <PokemonViewFind/>
          <Switch>
            <Route path="/" exact component={() => <Home pokemonData={pokemonData} loading={loading}/>}/>
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
      </SearchProvider>
    </SelectProvider>
  );
}

export default App;
