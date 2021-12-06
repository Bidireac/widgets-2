import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  FormControl,
  Input,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import SingleColor from '../components/SingleColor';
import Values from 'values.js';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 60,
  },
  formContainer: {
    display: 'flex',
    marginBottom: 20,
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    margin: '0 10px 0 50px',
    fontSize: 20,
  },
  generate: {
    backgroundColor: theme.palette.warning.light,
  },
  error: {
    border: `2px solid ${theme.palette.secondary.light}`,
    borderRadius: '5px',
  },
  grid: {
    minHeight: 'calc(100vh - 200px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(223.33px,1fr))',
    gridTemplateRows: 'repeat(auto-fit,minmax(96px,1fr))',
  },
}));

const ColorGenerator = () => {
  const classes = useStyles();
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#4179c4').all(8));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(8);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <Container className={classes.container}>
      <Container className={classes.formContainer}>
        <Typography gutterBottom variant="h4" component="h4">
          Color Generator
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl className={classes.form}>
            <Input
              type="text"
              name="color"
              id="color"
              placeholder="#4179c4"
              className={clsx(classes.input, error && classes.error)}
              value={color}
              onChange={(e) => setColor(e.target.value)}
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
      </Container>
      <div className={classes.grid}>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </div>
    </Container>
  );
};

export default ColorGenerator;
