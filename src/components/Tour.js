import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 300,
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const classes = useStyles();
  const [readMore, setReadMore] = useState(false);
  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <div className={classes.details}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              ${price}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="span">
            {readMore ? info : `${info.substring(0, 200)}...`}
          </Typography>
          <Button
            size="small"
            color="primary"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </Button>
        </CardContent>
        <CardActions>
          <Button size="medium" color="primary">
            Share
          </Button>
          <Button
            size="medium"
            color="secondary"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Tour;
