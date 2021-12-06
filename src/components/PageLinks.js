import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { links } from '../utils/linksData';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.warning.light,
    // color: (props) =>
    //   props.open ? theme.palette.info.light : theme.palette.warning.dark,
    fontSize: 18,
    marginRight: 6,
    textDecoration: 'none',
    textTransform: 'capitalize',
    '&:hover': {
      color: theme.palette.warning.dark,
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
}));

const PageLinks = ({ open }) => {
  const classes = useStyles({ open });
  return (
    <div className={classes.item}>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <ListItem key={id} button>
            <NavLink to={url} className={classes.link}>
              <Typography>{text}</Typography>
            </NavLink>
          </ListItem>
        );
      })}
    </div>
  );
};

export default PageLinks;
