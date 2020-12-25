import Editor from '@monaco-editor/react'
import React, { useRef, useState, useEffect } from 'react'
import IconButton from '@material-ui/core/Button'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles, CircularProgress, Toolbar } from '@material-ui/core'
import { Replay, Refresh } from '@material-ui/icons'

import axios from '../axios'

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: 'white',
  },
  bottom: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  replay: {
    color: 'white',
    '&:hover': {
      // color: "rgba(3,239,98,0.8)",
      boxShadow: 'none',
    },
  },
  replayDisable: {
    color: 'white!important',
    opacity: 0.4
  },
  button: {
    marginRight: theme.spacing(2),
    border: "1px solid #7986cb",
    color: "#7986cb",
    '&:hover': {
      boxShadow: 'none',
      opacity: 0.8
    },
  },
  disabledButton: {
    marginRight: theme.spacing(2),
    border: "1px solid #7986cb!important",
    color: '#7986cb!important',
    opacity: 0.4,
    width: '90px'
  },
  submitbutton: {
    marginRight: theme.spacing(2),
    backgroundColor: "#3f51b5",
    color: 'white',
    width: '90px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: "#5c6bc0",
    },
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    color: '#3f51b5',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  grow: {
    flexGrow: 1,
  }
}));

const EditorComponent = props => {
  const classes = useStyles();

  const [isEditorReady, setIsEditorReady] = useState(false)
  const [cnt, setCnt] = useState(0)
  const [runResult, setRunResult] = useState(null)
  const [running, setRunning] = useState(false)
  const [sectionProgress, setSectionProgress] = useState(null)

  let valueGetter = useRef()

  useEffect(() => {
    setSectionProgress(props.chapter_progress.sections.find(section => section.section_id.$oid === props.section_id.$oid))
  }, [])

  const handleEditorDidMount = (_valueGetter) => {
    setIsEditorReady(true)
    valueGetter.current = _valueGetter
  }

  const runCode = () => {
    console.log(valueGetter.current())
    setRunning(true)
    axios.post(`/api/v1/sections/run_code`, { "code": valueGetter.current() })
    .then(res => {
      setRunResult(res.data)
      console.log(res.data)
      props.runResult(res.data)
      setRunning(false)
    })
    .catch(err => {
      setRunning(false)
      console.log(err)
    })
  }

  const submitAnswer = () => {
    setRunning(true)
    if(sectionProgress) {
      let url = sectionProgress.completed ? `/api/v1/user_progresses/resubmit_answer` : `/api/v1/user_progresses/submit_answer`
      axios.post(url, { 
        "user_id": props.course_id,
        "course_id": props.course_id,
        "chapter_id": props.chapter_id.$oid,
        "section_id": props.section_id.$oid,
        "last_attempt": valueGetter.current(),
        "points": sectionProgress.completed ? 0 : props.points,
      })
      .then(res => {
        setRunResult(res.data)
        console.log(res.data)
        res.data.chapters.forEach(chapter => {
          if(chapter.chapter_id.$oid === props.chapter_id.$oid) {
            chapter.sections.forEach(section => {
              if(section.section_id.$oid === props.section_id.$oid) {
                setSectionProgress(section)
                return
              }
            })
          }
        })
        setRunning(false)
      })
      .catch(err => {
        setRunning(false)
        console.log(err)
      })
    }
  }

  const reset = () => {
    setCnt(cnt + 1)
  }

  return (
    <>
      <div className={classes.title}>
        <Typography variant="subtitle2" style={{fontWeight: 'bold'}}>solution.py</Typography>
      </div>
      <Editor
        key={cnt}
        height="48vh"
        language="python" 
        value={props.sample_code}
        editorDidMount={handleEditorDidMount}
        theme="dark"
        options={{
          "fontSize": '16px'
        }}
      />
      <Toolbar style={{minHeight: '50px'}}>
        <IconButton disabled={!isEditorReady || running} className={!isEditorReady || running ? classes.replayDisable : classes.replay} aria-label="刷新">
          <Replay onClick={reset} />
        </IconButton>
        {
          !isEditorReady || running ?
          <div className={classes.root}>
            <div className={classes.wrapper}>
              <Button 
                variant="outlined" 
                disabled
                className={classes.disabledButton}
              >
                运行中...
              </Button>
              <CircularProgress size={20} className={classes.buttonProgress} />
            </div>
          </div>
          :
          <Button 
            variant="outlined" 
            onClick={runCode}
            className={classes.button}
          >
            运行代码
          </Button>
        }
        <Button onClick={submitAnswer} disabled={!isEditorReady || running} className={classes.submitbutton}>提交答案</Button>
      </Toolbar>
    </>
  );
};

export default EditorComponent;