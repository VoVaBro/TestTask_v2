import React, { useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import DropDownMenu from '../menus/DropDownMenu'
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withStyles } from "@material-ui/core/styles";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import Selector from '../Selector'
// import HomeIcon from "@material-ui/icons/Home";

import { useHistory } from 'react-router-dom'

import { PokemonContext } from '../../context/PokemonContext'



const StyledMenuItem = withStyles(theme => ({
    root: {
        "&:focus": {
            backgroundColor: "var(--primary-yellow)",
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: 'red',
            }
        }
    }
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const history = useHistory()
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (

        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button aria-label="show 4 new mails" color="inherit">
                    <Badge color="secondary">
                        <Selector />
                    </Badge>
                </Button>
            </MenuItem>
            <MenuItem>

                {/* <StyledMenuItem onClick={() => history.push("/")}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </StyledMenuItem> */}

                {/* <StyledMenuItem onClick={() => history.push("/profile")}>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </StyledMenuItem> */}

            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>     
                    <Button onClick={() => prev()}>
                        <ArrowBackIcon />
                    </Button>

                    <Button onClick={() => next()}>
                        <ArrowForwardIcon />
                    </Button>
            </MenuItem>
        </Menu>
    );

    const { prev, next, findByName } = useContext(PokemonContext)


    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar style={{color: 'yellow'}}>
                    <Typography className={classes.title} variant="h6" >
                        Pokemon Cards
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                                <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search by name…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => findByName(e.target.value)}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <Button  onClick={() => prev()}>
                            <ArrowBackIcon />
                        </Button>

                        <Button onClick={() => next()}>
                            <ArrowForwardIcon />
                        </Button>

                        <Button aria-label="show 4 new mails" color="inherit">
                            <Badge color="secondary">
                                <Selector />
                            </Badge>
                        </Button>

                        {/* <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge color="secondary">
                                <DropDownMenu />
                            </Badge>
                        </IconButton> */}
                        
                    </div>
                    <div className={classes.sectionMobile}>
                        <Button
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}