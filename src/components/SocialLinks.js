import React from 'react';
import { social } from '../utils/linksData';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.warning.light,
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
      display: 'none',
    },
  },
}));

const SocialLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      {social.map((item) => {
        const { id, url, icon } = item;
        return (
          <a
            key={id}
            href={url}
            target="__blank"
            variant="body2"
            className={classes.link}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
