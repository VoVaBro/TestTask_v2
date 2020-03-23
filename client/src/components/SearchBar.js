import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import SearchContext from '../context/SearchContext'

const useStyles = makeStyles(theme => ({

    root: {
       
        display: 'center',
        alignItems: 'center',
        justify: 'center',
        width: 300,
    },
    input: {
        marginLeft: theme.spacing(0),

    },
    iconButton: {
        padding: 7,
        marginLeft: 15
    }
}));

export default function SearchBar() {

    const [searchValue, setSearchValue] = useContext(SearchContext.context);

    const [inputText, setInputText] = useState()

    const classes = useStyles();


    const inputHandler = (e) => {
        setInputText(e.target.value)
    }

    const findPokemon = () => {
        setSearchValue(inputText)
    }



    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Write name to find ..."
                inputProps={{ 'aria-label': 'search pokemons' }}
                onChange={(e) => inputHandler(e)}
            />
            <IconButton onClick={() => findPokemon()} type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}