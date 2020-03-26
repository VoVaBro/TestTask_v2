import React, { useContext, useState, useEffect } from 'react'
import PocemonCard from '../components/PocemonCard'

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { PokemonContext } from '../context/PokemonContext'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

const {outerWidth} = window

const Home = () => {

    

const [items, setItems] = useState(2)

useEffect(() => {
if (outerWidth <= 414){
    setItems(5)
}else {
    setItems(2)
}
}, [outerWidth])

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

                                        <Grid key={p.name} item xs={items}>

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