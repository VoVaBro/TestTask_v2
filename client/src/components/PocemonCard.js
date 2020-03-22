import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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


const PocemonCard = ({ pokemon }) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const NAME = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1, pokemon.name.length)

    return (
        <Card className='pokemon-card'>

            <p style={{fontWeight: 800}}>{NAME}</p>
            <p> Type: {pokemon.types[0].type.name} </p>
            <img src={pokemon.sprites.front_default} alt="" />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
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
                    <Typography paragraph>Abilities:</Typography>

                    <p>{}</p>
                    <Typography paragraph>
                        ....
          </Typography>
                    <Typography paragraph>
                        ....
          </Typography>
                    <Typography>
                        .....
          </Typography>
                </CardContent>
            </Collapse>

        </Card>
    );

}

export default PocemonCard
