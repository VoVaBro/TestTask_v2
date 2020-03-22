import React, { useState, useEffect } from 'react'
import { getAllPokemons, getPokemon } from '../functions/getPocemons'
import PocemonCard from '../components/PocemonCard'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

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

    const classes = useStyles();

    const [pokemonData, setPokemonData] = useState([])

    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemons(initialURL)
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, [])

    const next = async () => {
        setLoading(true);
        let data = await getAllPokemons(nextUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const prev = async () => {
        if (!prevUrl) return;
        setLoading(true);
        let data = await getAllPokemons(prevUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon)
            return pokemonRecord
        }))
        setPokemonData(_pokemonData);
    }

    return (
        <>
            {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1>
                :
                (
                    <div style={{ textAlign: 'center' }}>

                        <div className="btn">
                            <Button variant="contained" onClick={prev}>Prev</Button>
                            <Button variant="contained" onClick={next}>Next</Button>
                        </div>


                        <div className={classes.root}>

                            <Grid container spacing={2}>

                                {pokemonData.map(p => (

                                    <Grid item xs={6}>

                                        <PocemonCard pokemon={p} />

                                    </Grid>
                                ))}

                            </Grid>

                        </div>

                        <div className="btn">
                            <Button variant="contained" onClick={prev}>Prev</Button>
                            <Button variant="contained" onClick={next}>Next</Button>
                        </div>

                    </div>
                )}
        </>

    )
}

export default Home