import React, { useState } from 'react';
import { makeStyles, Toolbar, Typography, Grid, Button, Chip } from '@material-ui/core'
import { amber } from '@material-ui/core/colors'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import EventNoteIcon from '@material-ui/icons/EventNote'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import parse from 'html-react-parser'
import axios from '../axios'

import CourseHint from './CourseHint'

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: 'white',
    padding: theme.spacing(2)
  },
  instruction: {
    backgroundColor: 'white',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  title: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: 'white',
  },
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    border: "2px solid rgb(5, 25, 45)",
    color: "rgb(5, 25, 45)",
    '&:hover': {
      boxShadow: 'none',
      opacity: 0.8
    },
  },
  padding: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: '#F6F5FA'
  },
  chip: {
    backgroundColor: amber[500]
  },
  ul: {
    paddingLeft: theme.spacing(2)
  },
  li: {
    marginBottom: theme.spacing(1),
    color: '#191235'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: '48px',
    backgroundColor: '#F6F5FA',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}));

const CourseStepContent = props => {
  const classes = useStyles();
  const [hint, setHint] = useState(false)

  const useHint = () => {
    // axios.post(`/api/v1/user_progresses/use_hint`, {
    //   "user_id": props.course_id,
    //   "course_id": props.course_id,
    //   "chapter_id": props.chapter_id.$oid,
    //   "section_id": props.section._id.$oid,
    // })
    // .then(res => {
    //   setHint(true)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
    setHint(true)
  }

  return (
    <div className={classes.content}>
      <div className={classes.padding}>
        <Grid container direction="row" alignItems="center">
          <EventNoteIcon fontSize="small" className={classes.icon} /> <Typography variant="subtitle1">练习</Typography>
        </Grid>
      </div>
      <div className={classes.section}>
        <Typography variant="h5">{props.section.title}</Typography>
        <Typography variant="subtitle1">{parse(props.section.content.replace(/(?:\r\n|\r|\n)/g, '<br />'))}</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <PlaylistAddCheckIcon fontSize="small" className={classes.icon} />
        <Typography variant="subtitle1" style={{color: '#191235'}}>指导</Typography>
        <div className={classes.grow} />
        {
          hint ?
          <Chip label={`${props.section.points - 30}分`} size="small" className={classes.chip} />
          :
          <Chip label={`${props.section.points}分`} size="small" className={classes.chip} />
        }
      </Toolbar>
      <div className={classes.instruction}>
        <ul className={classes.ul}>
          {
            props.section.instructions.map((instruction, idx) => {
              return <li key={idx} className={classes.li}>{parse(instruction.replace(/(?:\r\n|\r|\n)/g, '<br />'))}</li>
            })
          }
        </ul>
      </div>
      {
        hint ?
        <CourseHint hint={props.section.hint} />
        :
        <Button variant="outlined" startIcon={<EmojiObjectsIcon />} className={classes.button} onClick={useHint}>使用提示 -30分</Button>
      }
    </div>
  );
};

export default CourseStepContent;