import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core'
import axios from '../axios'

const CoursePage = React.lazy(() => import('../courses/CoursePage'))

const CodeEditor = props => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const [chapterResponse, progressResponse] = await Promise.all([
        axios.get(`/api/v1/chapters/${props.match.params.chapter_id}`),
        axios.get(`/api/v1/user_progresses?user_id=${props.match.params.course_id}&course_id=${props.match.params.course_id}&chapter_id=${props.match.params.chapter_id}&section_id=${props.match.params.section_id}`)
      ])
      setData({
        chapter: chapterResponse.data,
        progress: progressResponse.data
      })
      setLoading(false)
    }
    fetchData()
  }, [])

  if(loading) {
    return <CircularProgress />
  }

  return (
    <div>
      <CoursePage course_id={props.match.params.course_id} progress={data.progress} chapter={data.chapter} section={data.chapter.sections.find(section => section._id.$oid === props.match.params.section_id)} />
    </div>
  );
};

export default CodeEditor;