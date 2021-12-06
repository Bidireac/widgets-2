import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Collapse,
  Container,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: 3,
    color: theme.palette.warning.light,
  },
  menu: {
    color: theme.palette.warning.light,
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  pages: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  test: {
    backgroundColor: theme.palette.warning.light,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar variant="dense" className={classes.toolbar}>
          <div className={classes.logo}>
            <DeviceHubIcon className={classes.icon} />
            <Typography variant="h6">Widgets</Typography>
          </div>
          <div className={classes.pages}>
            <PageLinks open={open} />
          </div>
          <SocialLinks open={open} />
          <MenuIcon className={classes.menu} onClick={() => setOpen(!open)} />
        </Toolbar>
        <div className={classes.test}>
          <Collapse in={open}>
            <Paper elevation={4}>
              <PageLinks open={open} />
            </Paper>
          </Collapse>
        </div>
      </Container>
    </AppBar>
  );
};

export default Navbar;
