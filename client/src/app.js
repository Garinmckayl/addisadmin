import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Employees from './components/employees/employees';
import Form from './components/form/form';
import { getEmployees } from './actions/employees';
import pageStyles from './styles';
import logo from './assets/images/logo.png';


const App = () => {

const classes = pageStyles();
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
        <Container maxWidth="lg">
      <AppBar className={classes.AppBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center"></Typography>
        <img className={classes.image} src={logo} alt="icon" height="300" width="300"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Employees />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;