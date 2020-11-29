import React from 'react';
import { makeStyles, Drawer, Toolbar, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { MoveToInbox, Mail, Bookmarks, AccountTree, Assignment, Assessment, BusinessCenter, TrackChanges, FitnessCenter } from '@material-ui/icons'
import { teal } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'

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
          <Link to="/">
            <ListItem button key={'学习进度'} selected={true} classes={{ selected: classes.selected }} className={classes.listItem}>
              <ListItemIcon><Mail /></ListItemIcon>
              <ListItemText primary={'学习进度'} />
            </ListItem>
          </Link>
          <Link to="/">
            <ListItem button key={'我的书签'} classes={{ selected: classes.selected }} className={classes.listItem}>
              <ListItemIcon><Bookmarks /></ListItemIcon>
              <ListItemText primary={'我的书签'} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button key={'职业方向'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><BusinessCenter /></ListItemIcon>
            <ListItemText primary={'职业方向'} />
          </ListItem>
          <ListItem button key={'技能方向'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><AccountTree /></ListItemIcon>
            <ListItemText primary={'技能方向'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <Link to="/courses">
            <ListItem button key={'所有课程'} classes={{ selected: classes.selected }} className={classes.listItem}>
              <ListItemIcon><BusinessCenter /></ListItemIcon>
              <ListItemText primary={'所有课程'} />
            </ListItem>
          </Link>
          <ListItem button key={'练习'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><FitnessCenter /></ListItemIcon>
            <ListItemText primary={'练习'} />
          </ListItem>
          <ListItem button key={'项目'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><TrackChanges /></ListItemIcon>
            <ListItemText primary={'项目'} />
          </ListItem>
          <ListItem button key={'学习评估'} classes={{ selected: classes.selected }} className={classes.listItem}>
            <ListItemIcon><Assessment /></ListItemIcon>
            <ListItemText primary={'学习评估'} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default ProfileDrawer;