import React, { useState } from 'react';
import EditorComponent from '../editor/EditorComponent'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const CourseHeader = React.lazy(() => import('../layouts/CourseHeader'))
const CourseStepContent = React.lazy(() => import('./CourseStepContent'))
const ShellOutput = React.lazy(() => import('../editor/ShellOutput'))

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: "10px 10px 0 10px"
  },
  paper: {
    backgroundColor: '#F6F5FA'
  },
  editorpaper: {
    backgroundColor: '#05192D'
  }
}));

const CoursePage = props => {
  const classes = useStyles();
  const [res, setRes] = useState(null)

  const runResult = (result) => {
    // let all = res ? res + result.stdout + result.stderr : result.stdout + result.stderr
    setRes(result)
  }

  return (
    <div>
      <CourseHeader />
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={5}>
          <Paper style={{height: '92vh', overflow: 'scroll'}}>
            <CourseStepContent section={props.section} />
          </Paper>
        </Grid>
        <Grid item xs={7} style={{height: '92vh'}}>
          <Paper className={classes.editorpaper} style={{marginBottom: '5px'}}>
            <EditorComponent prefix={props.section.prefix} runResult={runResult} />
          </Paper>
          <Paper className={classes.editorpaper}>
            <ShellOutput result={res} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CoursePage;