import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { articles } from './articles.json';
import Header from './components/Header';

import Content from './components/Content';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      
      <Content articles={articles} />
    </div>
  );
}

export default App;
