import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Typography } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import Loading from '../components/Loading';
import Tour from '../components/Tour';

const url = 'https://course-api.com/react-tours-project';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  divider: {
    backgroundColor: theme.palette.warning.light,
    height: 4,
  },
}));

const Home = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setTours(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <Grid container spacing={2} className={classes.container}>
        <Typography gutterBottom variant="h2" component="h2">
          No Tours Left
          <Divider variant="middle" className={classes.divider} />
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<RefreshIcon />}
          onClick={fetchTours}
        >
          Refresh
        </Button>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} className={classes.container}>
      <Typography gutterBottom variant="h2" component="h2">
        Our Tours
        <Divider variant="middle" className={classes.divider} />
      </Typography>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </Grid>
  );
};

export default Home;
