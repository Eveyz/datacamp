import React from 'react';
import { List, ListItem, ListItemIcon,ListItemText, Divider, Typography } from '@material-ui/core'
import { Inbox, Mail } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { indigo, teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
  padding: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    alignItems: 'center'
  },
  current_section: {
    backgroundColor: '#F5F5F5',
  }
}));

const CourseDrawer = props => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <Link to={`/courses/${props.section.course_id.$oid}`} className="clean-link">
        <ListItem style={{backgroundColor: teal[500]}}>
          <ListItemIcon style={{minWidth: '30px'}}><ArrowBackIcon style={{color: 'white'}} /></ListItemIcon>
          <ListItemText style={{color: 'white'}}>{props.section.course_name + " > " + props.section.chapter}</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Typography variant="h4" className={classes.padding}>{props.section.title}</Typography>
      <Typography variant="subtitle1" className={classes.padding}>{props.section.description}</Typography>
      <Divider />
      <Typography variant="subtitle2" className={classes.padding} style={{color: indigo[500]}}>本章节内容</Typography>
      <List>
        {
          props.sections.map((section, idx) => {
            return <Link key={idx} to={`/courses/${props.course_id}/chapters/${props.chapter_id}/sections/${props.section._id.$oid}`} className="clean-link">
                      <ListItem button className={section._id.$oid === props.section._id.$oid ? classes.current_section : null }>
                        <ListItemText primary={section.title} />
                      </ListItem>
                    </Link>
          })
        }
      </List>
    </div>
  );
};

export default CourseDrawer;