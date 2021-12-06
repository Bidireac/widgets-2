import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, Typography, Button } from '@material-ui/core';
import data from '../utils/sliderData';
import Person from '../components/Person';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: theme.palette.warning.light,
    height: 45,
    width: 5,
    transform: 'rotate(25deg)',
    marginBottom: 20,
    marginRight: 20,
  },
  persons: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    overflow: 'hidden',
    width: '80vw',
    height: '450px',
    maxWidth: '800px',
  },
  left: {
    position: 'absolute',
    cursor: 'pointer',
    transition: 'all .3s linear',
    left: 0,
    '&:hover': {
      backgroundColor: theme.palette.warning.light,
    },
  },
  right: {
    position: 'absolute',
    cursor: 'pointer',
    transition: 'all .3s linear',
    right: 0,
    '&:hover': {
      backgroundColor: theme.palette.warning.light,
    },
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [people, index]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);
  return (
    <Container>
      <Container className={classes.container}>
        <Divider
          variant="middle"
          className={classes.divider}
          orientation="vertical"
        />
        <Typography gutterBottom variant="h2" component="h2">
          Reviews
        </Typography>
      </Container>
      <Container className={classes.persons}>
        {people.map((person, personIndex) => {
          return (
            <Person
              key={person.id}
              {...person}
              personIndex={personIndex}
              index={index}
              length={people.length}
            />
          );
        })}
        <Button
          variant="contained"
          className={classes.left}
          onClick={() => setIndex(index - 1)}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          variant="contained"
          className={classes.right}
          onClick={() => setIndex(index + 1)}
        >
          <ChevronRightIcon />
        </Button>
      </Container>
    </Container>
  );
};

export default Profile;
