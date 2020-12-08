import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core'
import axios from '../axios'

const CoursePage = React.lazy(() => import('../courses/CoursePage'))

const CodeEditor = props => {

  const [loading, setLoading] = useState(true)
  const [section, setSection] = useState(null)

  useEffect(() => {
    axios.get(`/api/v1/sections/${props.match.params._id}`)
    .then(res => {
      setSection(res.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <CircularProgress />
  }

  return (
    <div>
      <CoursePage section={section}/>
    </div>
  );
};

export default CodeEditor;