import React from 'react'
import PocemonCard from '../components/PocemonCard'
import IconButton from '@material-ui/core/IconButton';
import Selector from '../components/Selector'
import SearchContext from '../context/SearchContext'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsIcon from '@material-ui/icons/Directions';


import Grid from '@material-ui/core/Grid';

import { useFetch } from '../hooks/useFetch'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));


const Home = ({ pokemonData, loading }) => {

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

                                        <Grid key={p.name} item xs={3}>

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