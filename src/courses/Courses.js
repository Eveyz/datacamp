import React from 'react';
import { makeStyles, CssBaseline, Typography, Toolbar } from '@material-ui/core'

import ProfileHeader from '../users/ProfileHeader'

const DrawerContent = React.lazy(() => import('../layouts/DrawerContent'))

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Courses = props => {
  const classes = useStyles();

  return (
    <div>
      <DrawerContent>
        <Typography>From courses here, and it works</Typography>
      </DrawerContent>
    </div>
  );
};

export default Courses;