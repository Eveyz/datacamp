import React from 'react';
import { makeStyles, Toolbar, Typography, Grid, Button, Chip } from '@material-ui/core'
import { amber } from '@material-ui/core/colors'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import EventNoteIcon from '@material-ui/icons/EventNote'
import parse from 'html-react-parser'

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
    marginBottom: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: '48px',
    backgroundColor: '#F6F5FA'
  }
}));

const CourseStepContent = props => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.padding}>
        <Grid container direction="row" alignItems="center">
          <EventNoteIcon fontSize="small" className={classes.icon} /> <Typography variant="subtitle1">练习</Typography>
        </Grid>
      </div>
      <div className={classes.section}>
        <Typography variant="h5">{props.section.title}</Typography>
        <Typography variant="subtitle1">{parse(props.section.content)}</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <EventNoteIcon fontSize="small" className={classes.icon} />
        <Typography variant="subtitle1">指导</Typography>
        <div className={classes.grow} />
        <Chip label={`${props.section.points}积分`} size="small" className={classes.chip} />
      </Toolbar>
      <div className={classes.instruction}>
        <ul className={classes.ul}>
          {
            props.section.instructions.map((instruction, idx) => {
              return <li key={idx} className={classes.li}>{parse(instruction)}</li>
            })
          }
        </ul>
        <Button variant="outlined" startIcon={<EmojiObjectsIcon />} className={classes.button}>使用提示 -30XP</Button>
      </div>
    </div>
  );
};

export default CourseStepContent;