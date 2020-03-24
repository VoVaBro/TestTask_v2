import React, { useState, useEffect, useContext } from 'react'
import { getAllPokemons, getPokemon } from '../functions/getPocemons'
import PocemonCard from '../components/PocemonCard'
import SearchBar from '../components/SearchBar'
import Selector from '../components/Selector'
import PocemonProvider from '../context/PocemonContext'
import SearchContext from '../context/SearchContext'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { useFetch } from '../hooks/useFetch'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Home = () => {

    const {pokemonData, loading } = useFetch()

    const classes = useStyles();

    


    return (
        <>
            {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1>
                :
                (
                    <div style={{ textAlign: 'center' }}>

                        <div className={classes.root}>

                            <Grid container spacing={2}>

                                {pokemonData.map(p => (

                                    <Grid key={p.name} item xs={6}>

                                        <PocemonCard addFavirite={''} key={p.name} pokemon={p} />

                                    </Grid>
                                ))}

                            </Grid>
                        </div>
                    </div>
                )}
        </>

    )
}

export default Home