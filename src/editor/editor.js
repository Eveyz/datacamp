import Editor from '@monaco-editor/react'
import React, { useRef, useState } from 'react';

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

      <button onClick={showValue} disabled={!isEditorReady}>Show value</button>

      <Editor 
        height="90vh" 
        language="python" 
        value={"// Write your code here"}
        editorDidMount={handleEditorDidMount}
        theme="dark"
        options={{
          "fontSize": '16px'
        }}
      />
        
    </>
  );
};

export default EditorComponent;