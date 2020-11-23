import Editor, { monaco } from '@monaco-editor/react'
import React, { useRef, useState } from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles'
import { FiberManualRecordSharp, Replay } from '@material-ui/icons'

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
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: purple[500],
    color: 'white',
    '&:hover': {
      backgroundColor: purple[600],
      boxShadow: 'none',
    },
  },
  replay: {
    color: 'white',
    outline: '1px solid #4caf50',
    marginRight: theme.spacing(1),
    borderRadius: '4px'
  }
}));

const EditorComponent = props => {
  const classes = useStyles();

  const [isEditorReady, setIsEditorReady] = useState(false)
  let valueGetter = useRef()

  const handleEditorDidMount = (_valueGetter) => {
    setIsEditorReady(true)
    valueGetter.current = _valueGetter
  }

  const showValue = () => {
    console.log(valueGetter.current())
    console.log(valueGetter.current() instanceof String)
    console.log(typeof valueGetter.current())
  }

  return (
    <>
      <div className={classes.title}>
        <Typography variant="subtitle2" style={{fontWeight: 'bold'}}>solution.py</Typography>
      </div>
      <Editor 
        height="50vh" 
        language="python" 
        value={"// Write your code here"}
        editorDidMount={handleEditorDidMount}
        theme="dark"
        options={{
          "fontSize": '16px'
        }}
      />
      <div className={classes.bottom}>
        <Button variant="outlined" onClick={showValue} disabled={!isEditorReady} className={classes.replay} startIcon={<Replay />}></Button>
        <Button onClick={showValue} disabled={!isEditorReady} className={classes.button}>运行</Button>
        <Button onClick={showValue} disabled={!isEditorReady} className={classes.button}>提交答案</Button>
      </div>
        
    </>
  );
};

export default EditorComponent;