import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  
});

function Article({ id, title, author, publishDate, imageUrl }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/article/${id}`} style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imageUrl} title={title} />
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography gutterBottom variant="subtitle1" component="div">
                {author}
              </Typography>
              <Typography gutterBottom variant="subtitle2" color="textSecondary" component="div">
                {publishDate}
              </Typography>
            </div>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default Article;
