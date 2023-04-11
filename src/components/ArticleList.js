import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import articles from '../articles.json';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 760,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ArticleList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {articles.articles.map((article) => (
        <ListItem key={article.id} button>
          <ListItemText primary={article.title} secondary={article.content} />
        </ListItem>
      ))}
    </List>
  );
}

export default ArticleList;