import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textDecoration: 'none',
    boxShadow: '0 0 5px #ccc',
    borderRadius: '5px',
    '&:hover': {
      boxShadow: '0 0 5px #aaa',
    },
  },
  cardImage: {
    height: 200,
    width: '100%',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    height: '100%',
  },
  cardAuthor: {
    fontSize: '0.8rem',
    color: '#666',
    textAlign: 'left',
  },
  cardDate: {
    fontSize: '0.8rem',
    color: '#666',
    textAlign: 'right',
  },
}));

const HomePage = ({ articles }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Link to={`/article/${article.id}`} className={classes.card}>
              <img
                src={article.imageUrl}
                alt={article.title}
                className={classes.cardImage}
              />
              <div className={classes.cardContent}>
                <Typography variant="body1">{article.title}</Typography>
                <div>
                  <Typography
                    variant="caption"
                    className={classes.cardAuthor}
                  >
                    {article.author}
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.cardDate}
                  >
                    {article.publishDate}
                  </Typography>
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
