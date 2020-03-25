import React, { useState, useEffect, useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { PokemonContext } from '../context/PokemonContext'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';



import pokemonTypes from '../helpers/pokemonTypes'



const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 9,
    padding: '6px 10px 6px 8px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),

    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 2,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


const Selector = () => {

  const pokemon = useContext(PokemonContext)

  const classes = useStyles();

  const [numCards, setNumCards] = useState(10);
  const [pokemonType, setpokemonType] = useState("All");


  const handleChange = event => {
    setNumCards(event.target.value)
    pokemon.switchViews(event.target.value)
  };

  const handleSearch = event => {
    setpokemonType(event.target.value)
    pokemon.switchType(event.target.value)
  };

  

  return (
    <div>
      <FormControl className={classes.margin}>
      
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={numCards}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <InputLabel id="demo-simple-select-label">Show</InputLabel>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <FormHelperText>Chose type:</FormHelperText>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={pokemonType}
          onChange={handleSearch}
          input={<BootstrapInput />}
        >
          {
            pokemonTypes.map(t => (
            <MenuItem value={t}>{t}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}
export default Selector