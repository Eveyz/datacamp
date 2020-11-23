import React from 'react';
import EditorComponent from '../editor/editor'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CourseHeader from '../layouts/CourseHeader'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: "10px 10px 0 10px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  editorpaper: {
    backgroundColor: '#05192D'
  }
}));

const CoursePage = props => {
  const classes = useStyles();

  return (
    <div>
      <CourseHeader />
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            Course
            Load a Pandas Dataframe
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.editorpaper}><EditorComponent /></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CoursePage;