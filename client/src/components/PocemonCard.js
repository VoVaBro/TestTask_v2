import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import typeColors from '../helpers/typeColors'

const useStyles = makeStyles(theme => ({

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));


const PocemonCard = ({ pokemon, addFavirite }) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const NAME = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1, pokemon.name.length)
    const ABILITIES = pokemon.abilities[0].ability.name.charAt(0).toUpperCase() + pokemon.abilities[0].ability.name.substring(1, pokemon.abilities[0].ability.name.length)

    const typeColor = pokemon.types[0].type.name
    
    console.log(typeColor)

    return (
        <Card className='pokemon-card'>

            <div style={{background: typeColors[typeColor]}}>

                <p style={{ fontWeight: 800 }}>{NAME}</p>
                <p> Type: {pokemon.types[0].type.name} </p>
                <img src={pokemon.sprites.front_default} alt="" />
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
            </div>


            <CardActions >

                <IconButton onClick={() => addFavirite(pokemon)} aria-label="add to favorites">
                    <FavoriteIcon></FavoriteIcon>
                </IconButton>



                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>

            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography style={{ fontWeight: 800 }} paragraph>Abilities:</Typography>
                    <p >{ABILITIES}</p>
                    <Typography style={{ fontWeight: 800, paddingTop: 5 }} paragraph>Base Experience: </Typography>
                    <Typography paragraph>
                        <p >{pokemon.base_experience}</p>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default PocemonCard
