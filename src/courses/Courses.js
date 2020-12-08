import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography, CircularProgress } from '@material-ui/core'
import axios from '../axios'
import CourseCard from './CourseCard'

const DrawerContent = React.lazy(() => import('../layouts/DrawerContent'))

const Courses = props => {

  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get("api/v1/courses")
    .then(res => {
      setCourses(res.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
  }, [])

  let content = <Container maxWidth="lg"><CircularProgress /></Container>

  if(!loading) {
    content = <Container maxWidth="lg">
                <Typography variant="h5" gutterBottom>300个课程</Typography>
                <Grid container spacing={3}>
                  {
                    courses.map((course, idx) => {
                      return <Grid item key={idx} xs={4}>
                                <CourseCard course={course} />
                              </Grid>
                    })
                  }
                </Grid>
              </Container>
  }

  return (
    <div>
      <DrawerContent match={props.match}>
        {content}
      </DrawerContent>
    </div>
  );
};

export default Courses;