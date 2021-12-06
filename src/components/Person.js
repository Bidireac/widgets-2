import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Avatar } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: `5px solid ${theme.palette.warning.light}`,
    margin: 20,
  },
  person: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80vw',
    height: '450px',
    maxWidth: '800px',
    transition: 'all .3s linear',
    opacity: 0,
  },
  text: {
    lineHeight: 2,
    marginTop: 20,
    textAlign: 'center',
    color: '#617d98',
  },
  icon: {
    fontSize: 50,
    color: theme.palette.warning.light,
  },

  name: {
    color: theme.palette.warning.light,
    textTransform: 'uppercase',
  },
  title: {
    textTransform: 'capitalize',
  },
  activeSlide: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  lastSlide: {
    transform: 'translateX(-100%)',
  },
  nextSlide: {
    transform: 'translateX(100%)',
  },
}));

const Person = ({ image, name, title, quote, personIndex, index, length }) => {
  const classes = useStyles();
  let position = classes.nextSlide;
  if (personIndex === index) {
    position = classes.activeSlide;
  }
  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === length - 1)
  ) {
    position = classes.lastSlide;
  }
  return (
    <Grid item xs={6} className={clsx(classes.person, position)}>
      <Avatar alt={name} src={image} className={classes.avatar} />
      <Typography variant="h5" component="h5" className={classes.name}>
        {name}
      </Typography>
      <Typography
        gutterBottom
        variant="subtitle1"
        component="span"
        className={classes.title}
      >
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={classes.text}
      >
        {quote}
      </Typography>
      <FormatQuoteIcon className={classes.icon} />
    </Grid>
  );
};

export default Person;
