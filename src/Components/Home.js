import React from 'react'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {Link} from "react-router-dom" ; 
import Grid from '@material-ui/core/Grid';
  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Home() {

const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={3} >
      <Paper className={classes.paper}>
      <MenuList>
          <h1 align="center"> Menu </h1>
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="inherit"><Link to="/users"> Users </Link></Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PostAddIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="inherit"><Link to="/posts"> Posts </Link></Typography>
        </MenuItem>
      </MenuList>
    </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          <h1> Welcome to the mini challenge React by Datagram</h1>
          </Paper>
      </Grid>
      </Grid>
    
    </div>
  );
}

export default Home
