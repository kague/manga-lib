import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../logo.svg';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" style={{ width: '100%' }}>
        <Toolbar>
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="subtitle1" color="inherit">
            Manga Lib
          </Typography>
          <img src={logo} className="App-logo" alt="logo" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
