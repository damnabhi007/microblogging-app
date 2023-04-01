import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8), // add top margin to create space for the fixed header
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  title: {
    fontWeight: 'bold',
  },
  authorAndDate: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
  author: {
    color: '#888',
  },
  date: {
    color: '#888',
    textAlign: 'right',
  },
  media: {
    height: 250,
  },
}));

const Content = ({ articles }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.header}>
            <Typography variant="h4">
              Articles
            </Typography>
          </div>
        </Grid>
        <Grid container spacing={3}>
          {/* Map through articles here */}
          {articles.map((article, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={article.imageUrl}
                    title={article.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
                      {article.title}
                    </Typography>
                    <div className={classes.authorAndDate}>
                      <Typography variant="subtitle2" component="span" className={classes.author}>
                        {article.author}
                      </Typography>
                      <Typography variant="subtitle2" component="span" className={classes.date}>
                        {article.publishDate}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
