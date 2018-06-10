import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
    <div>
        <AppBar position="static" color="primary">
            <Toolbar>
            <Typography variant="title" color="inherit">
                Search Gifs - API GIPHY
            </Typography>
            </Toolbar>
        </AppBar>
    </div>
);

export default Header;