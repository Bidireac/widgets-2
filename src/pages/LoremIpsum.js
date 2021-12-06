import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Divider,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core';
import data from '../utils/loremData';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: theme.palette.warning.light,
    height: 4,
  },
  generate: {
    backgroundColor: theme.palette.warning.light,
    marginLeft: 30,
  },
  form: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  input: {
    fontSize: 20,
  },
  label: {
    fontSize: 25,
  },
}));

const LoremIpsum = () => {
  const classes = useStyles();
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);
    if (amount < 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <Grid container spacing={2} className={classes.container}>
      <Typography gutterBottom variant="h2" component="h2">
        TIRED OF BORING LOREM IPSUM?
        <Divider variant="middle" className={classes.divider} />
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="amount" className={classes.label}>
            Paragraphs
          </InputLabel>
          <Input
            type="number"
            name="amount"
            id="amount"
            className={classes.input}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            className={classes.generate}
          >
            GENERATE
          </Button>
        </FormControl>
      </form>
      {text.map((txt, index) => {
        return (
          <Grid key={index} item xs={6}>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="h2"
              key={index}
            >
              {txt}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default LoremIpsum;
