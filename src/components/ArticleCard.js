import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20,
    
  },
  media: {
    height: 140,
  },
});

const ArticleCard = ({ article }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/article/${article.id}`}>
        <CardMedia
          className={classes.media}
          image={article.image}
          title={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.author}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" component="p">
              {article.publishDate}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
