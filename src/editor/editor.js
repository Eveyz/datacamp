import Editor from '@monaco-editor/react'
import React, { useRef, useState } from 'react'
import IconButton from '@material-ui/core/Button'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Replay } from '@material-ui/icons'

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
    color: '#03EF62',
    '&:hover': {
      color: "rgba(3,239,98,0.8)",
      boxShadow: 'none',
    },
  },
  button: {
    marginRight: theme.spacing(2),
    border: "1px solid #03EF62",
    color: "#03EF62",
    '&:hover': {
      boxShadow: 'none',
      opacity: 0.8
    },
  },
  submitbutton: {
    marginRight: theme.spacing(2),
    backgroundColor: "rgb(3,239,98)",
    color: '#05192D',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: "rgba(3,239,98,0.8)",
      boxShadow: 'none',
    },
  }
}));

const EditorComponent = props => {
  const classes = useStyles();

  const [isEditorReady, setIsEditorReady] = useState(false)
  const [runResult, setRunResult] = useState(null)

  let valueGetter = useRef()

  const handleEditorDidMount = (_valueGetter) => {
    setIsEditorReady(true)
    valueGetter.current = _valueGetter
  }

  const showValue = () => {
    console.log(valueGetter.current())
    axios.post(`/api/v1/sections/run_code`, { "code": valueGetter.current() })
    .then(res => {
      setRunResult(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <div className={classes.title}>
        <Typography variant="subtitle2" style={{fontWeight: 'bold'}}>solution.py</Typography>
      </div>
      <Editor 
        height="50vh" 
        language="python" 
        value={"# Write your code here"}
        editorDidMount={handleEditorDidMount}
        theme="dark"
        options={{
          "fontSize": '16px'
        }}
      />
      <div className={classes.bottom}>
        <IconButton className={classes.replay} aria-label="刷新">
          <Replay />
        </IconButton>
        <Button 
          variant="outlined" 
          onClick={showValue}
          disabled={!isEditorReady}
          className={classes.button}
        >
          运行代码
        </Button>
        <Button onClick={showValue} disabled={!isEditorReady} className={classes.submitbutton}>提交答案</Button>
      </div>
        
    </>
  );
};

export default EditorComponent;