import React, { useContext } from 'react'
import PocemonCard from '../components/PocemonCard'

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { PokemonContext } from '../context/PokemonContext'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));


const Home = () => {

    const { pokemonData, loading } = useContext(PokemonContext)

    const classes = useStyles();

    return (
        <>
            {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1>
                :
                (
                    <div>

                        <div style={{ textAlign: 'center' }}>

                            <div className={classes.root}>

                                <Grid container spacing={1}>

                                    {pokemonData.map(p => (

                                        <Grid key={p.name} item xs={2}>

                                            <PocemonCard addFavirite={''} key={p.name} pokemon={p} />

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