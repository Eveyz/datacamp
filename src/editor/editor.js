import Editor from '@monaco-editor/react'
import React, { useRef, useState } from 'react'
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const EditorComponent = props => {

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
      <Button onClick={showValue} disabled={!isEditorReady} style={{backgroundColor: purple[500], color: 'white'}}>Show value</Button>
        
    </>
  );
};

export default EditorComponent;