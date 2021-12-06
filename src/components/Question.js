import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    width: '100%',
    backgroundColor: 'rgb(220,220,220)',
  },
}));

const Question = ({ id, title, info }) => {
  const classes = useStyles();
  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}a-content`}
        id={`panel${id}a-header`}
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{info}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Question;
