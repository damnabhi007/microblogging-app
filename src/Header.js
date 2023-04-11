import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    color: theme.palette.primary.contrastText,
    borderRadius: 12,
    padding: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 9999 // set a high z-index to ensure the header is always on top
  },
  logo: {
    width: 50,
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <img src="https://techcrunch.com/wp-content/uploads/2018/04/tc-logo-2018-square-reverse2x.png" alt="logo" className={classes.logo} />
      <Typography variant="h4" component="h1">
        TECH CRUNCH
      </Typography>
    </Box>
  );
}

export default Header;
