import React from 'react';
import { makeStyles, Toolbar, ListItem, ListItemText, Typography, ListItemIcon } from '@material-ui/core'
import { VideoCall, Done, Code } from '@material-ui/icons'
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  }
}));

const CourseStep = props => {
  return (
    <ListItem button>
      <ListItemIcon style={{minWidth: '35px'}}>
        <Code style={{color: 'black'}} />
      </ListItemIcon>
      <ListItemText primary="Python你好" />
      <Done style={{color: teal[500]}} />
      <Typography>50积分</Typography>
    </ListItem>
  );
};

export default CourseStep;