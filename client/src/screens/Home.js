import React, { useContext, useEffect } from 'react'
import PocemonCard from '../components/PocemonCard'

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { PokemonContext } from '../context/PokemonContext'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

const { outerWidth } = window

const Home = () => {

    let gridValue;

    useEffect(() => {
        if (outerWidth <= 414) {
            gridValue = 5
        } else {
            gridValue = 1
        }
    }, [outerWidth])



    const { pokemonData, loading } = useContext(PokemonContext)

    const classes = useStyles();


    const addFavorite = (data) => {
        console.log(data)
    }


    return (
        <>
            {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1>
                :
                (
                    <div>

                        <div style={{ textAlign: 'center' }}>

                            <div className={classes.root}>

                                <Grid container spacing={2}>

                                    {pokemonData.map(p => (

                                        <Grid key={p.name} item xs={gridValue}>

                                            <PocemonCard addFavirite={addFavorite} key={p.name} pokemon={p} />

                                        </Grid>
                                    ))}

                                </Grid>
                            </div>
                        </div>
                    </div>
                )}
        </>


    )
}

export default Home