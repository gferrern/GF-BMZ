import ReactDOM from "react-dom";
import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';

import CartDetails from "./CartDetails";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            GF_BMZ
          </Typography>

          <CartDetails />
        </Toolbar>
      </AppBar>
    </div>
  );
}
