import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import rgbToHex from '../utils/rgbToHex';
import { CardActionArea, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  color: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    padding: '1rem 2rem',
    cursor: 'pointer',
    fontSize: '1rem',
    textTransform: 'none',
  },
  light: {
    color: '#fff',
  },
}));

const SingleColor = ({ rgb, weight, index }) => {
  const classes = useStyles();
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <CardActionArea
      className={clsx(classes.color, index > 11 && classes.light)}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <Typography variant="subtitle1" component="p">
        {weight}%
      </Typography>
      <Typography gutterBottom variant="subtitle1" component="p">
        {hex}
      </Typography>
      {alert && (
        <Typography variant="body2" component="p">
          Copied to Clipboard!
        </Typography>
      )}
    </CardActionArea>
  );
};

export default SingleColor;
