import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const Header = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#444' }}>
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Teste BitcoinTrade
          </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;