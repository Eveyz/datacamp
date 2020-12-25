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
    backgroundColor: '#15141F'
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
      <CourseHeader course_id={props.course_id} chapter={props.chapter} section={props.section} />
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={5}>
          <Paper style={{height: '92vh', overflow: 'scroll'}}>
            <CourseStepContent course_id={props.course_id} chapter_id={props.chapter._id} section={props.section} />
          </Paper>
        </Grid>
        <Grid item xs={7} style={{height: '92vh'}}>
          <Paper className={classes.editorpaper} style={{marginBottom: '2px'}}>
            <EditorComponent 
              course_id={props.course_id}
              chapter_id={props.chapter._id} 
              section_id={props.section._id} 
              chapter_progress={props.progress.chapters.find(chapter => chapter.chapter_id.$oid === props.chapter._id.$oid)}
              points={props.section.points} 
              sample_code={props.section.sample_code} 
              runResult={runResult} 
            />
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