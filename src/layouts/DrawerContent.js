import React from 'react';
import { makeStyles, CssBaseline, Toolbar } from '@material-ui/core'

import ProfileHeader from '../users/ProfileHeader'

const Drawer = React.lazy(() => import('./Drawer'))

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const DrawerContent = props => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <ProfileHeader />
        <Drawer match={props.match} />
        <main className={classes.content}>
          <Toolbar />
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default DrawerContent;