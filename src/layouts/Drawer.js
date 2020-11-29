import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { teal } from '@material-ui/core/colors';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#05192D'
  },
  drawerContainer: {
    overflow: 'auto',
  },
  listItem: {
    '& span, & svg': {
      color: '#9BA3AB',
      fontWeight: '550'
    },
    '&:hover': {
      backgroundColor: '#213147',
      '& span, & svg': {
        color: 'white',
      },
    }
  },
  selected: {
    '& span, & svg': {
      color: 'white',
      fontWeight: '550'
    },
  }
}));

const ProfileDrawer = props => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <br/>
        <List>
          <ListItem button key={'学习进度'} selected={true} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'学习进度'} />
          </ListItem>
          <ListItem button key={'我的书签'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><BookmarksIcon /></ListItemIcon>
            <ListItemText primary={'我的书签'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={'职业方向'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><BusinessCenterIcon /></ListItemIcon>
            <ListItemText primary={'职业方向'} />
          </ListItem>
          <ListItem button key={'技能方向'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><AccountTreeIcon /></ListItemIcon>
            <ListItemText primary={'技能方向'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={'所有课程'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><BusinessCenterIcon /></ListItemIcon>
            <ListItemText primary={'所有课程'} />
          </ListItem>
          <ListItem button key={'练习'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
            <ListItemText primary={'练习'} />
          </ListItem>
          <ListItem button key={'项目'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><TrackChangesIcon /></ListItemIcon>
            <ListItemText primary={'项目'} />
          </ListItem>
          <ListItem button key={'学习评估'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><AssessmentIcon /></ListItemIcon>
            <ListItemText primary={'学习评估'} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default ProfileDrawer;