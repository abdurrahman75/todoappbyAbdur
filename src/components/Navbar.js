import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import theme from "../theme";
import todoapplogo from "../todoapplogo.png";
import {Link} from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },


};



function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
        <img src={todoapplogo} alt="Todo App" height= '50' width='100' style={{marginRight:50}}/>
           <MuiThemeProvider theme={theme}>
            <Link to="/create-todo">  <Button color="primary" > Create Todo</Button> </Link>
            <Link to="/edit/:id"> <Button color="primary"> Edit Todo </Button></Link>
           </MuiThemeProvider>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);