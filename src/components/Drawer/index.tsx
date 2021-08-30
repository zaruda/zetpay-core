import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Theme, Typography } from '@material-ui/core';

import GooglePlayIcon from '../../icons/GooglePlayIcon';
import CardIcon from '../../icons/CardIcon';
import { IDrawerProps } from './types';

const useStyles = makeStyles<Theme>(theme => ({
  header: {
    padding: theme.spacing(1, 0, 1, 4)
  },
  googleIcon: {
    display: 'block',
    width: 75,
    height: '100%'
  },
  content: {
    padding: theme.spacing(1, 4, 3, 4)
  },
  title: {
    marginBottom: theme.spacing(5)
  },
  subtitle: {
    marginBottom: theme.spacing(3)
  }
}));

export default function Drawer({ children }: IDrawerProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <>
      <div onClick={toggleDrawer(true)}>{children}</div>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div>
          <div className={classes.header}>
            <GooglePlayIcon className={classes.googleIcon} />
          </div>
          <Divider />
          <div className={classes.content}>
            <Typography variant="h6" className={classes.title}>
              Add payment method to your Google account
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.subtitle}
            >
              Add a payment method to your account to start your free trial. You
              won’t be charged if you cancel it before{' '}
              {format(addDays(new Date(), 3), 'PPP')}.
            </Typography>
            <Button
              startIcon={<CardIcon />}
              fullWidth
              variant="outlined"
              href="/subscribe/form"
            >
              Add credit or debit card
            </Button>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
}
