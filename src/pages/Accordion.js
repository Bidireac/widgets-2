import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, Typography } from '@material-ui/core';
import data from '../utils/accordionData';
import Question from '../components/Question';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: theme.palette.warning.light,
    height: 4,
  },
}));

const About = () => {
  const classes = useStyles();
  const [questions, setQuestions] = useState(data);

  return (
    <Container className={classes.container}>
      <Typography gutterBottom variant="h2" component="h2">
        Questions and Answers about Login
        <Divider variant="middle" className={classes.divider} />
      </Typography>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </Container>
  );
};

export default About;
