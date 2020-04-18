import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProgressBar1 from '../src/components/ProgressBar1'
import ProgressBar2 from '../src/components/ProgressBar2'
import ProgressBar3 from '../src/components/ProgressBar3'
import ProgressBar4 from '../src/components/UserCard/UserCard'

const useStyles = makeStyles((theme) => ({
  title: {
    marginRight:'15px',
    cursor:'pointer',
  },
  link:{
    color:'white',
    textDecoration:'none'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
              <AppBar position="static" color="secondary">
                  <Toolbar>
                      <Typography variant="body1" className={classes.title}>
                      <Link to="/" className={classes.link}>Progress Bar1</Link>
                      </Typography>
                      <Typography variant="body1" className={classes.title}>
                      <Link to="/ProgressBar2" className={classes.link}>Progress Bar2</Link>
                      </Typography>
                      <Typography variant="body1" className={classes.title}>
                      <Link to="/ProgressBar3" className={classes.link}>Progress Bar3</Link>
                      </Typography>
                      {/* <Typography variant="body1" className={classes.title}>
                      <Link to="/ProgressBar4" className={classes.link}>Progress Bar4</Link>
                      </Typography> */}
                  </Toolbar>
              </AppBar>
              <Switch>
                  <Route exact path="/">
                      <ProgressBar1 />
                  </Route>
                  <Route path="/ProgressBar2">
                      <ProgressBar2 />
                  </Route>
                  <Route path="/ProgressBar3">
                      <ProgressBar3 />
                  </Route>
                  {/* <Route path="/ProgressBar4">
                      <ProgressBar4 />
                  </Route> */}
                </Switch>
      </Router>
    </div>
  );
}

export default App;

