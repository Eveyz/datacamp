import React, { useEffect, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
// import axios from 'axios'
// import { AppContext } from './AppContext'

const CourseVideo = React.lazy(() => import('./courses/CourseVideo'))
const Profile = React.lazy(() => import('./users/Profile'))
const Account = React.lazy(() => import('./users/Account'))

const Course = React.lazy(() => import('./courses/Course'))
const Courses = React.lazy(() => import('./courses/Courses'))
const CodeEditor = React.lazy(() => import('./sections/CodeEditor'))
const Bookmarks = React.lazy(() => import('./users/Bookmarks'))
const LearnPage = React.lazy(() => import('./users/LearnPage'))

const Routes = props => {
  // const [context, setContext] = useContext(AppContext);
  
  return (
    <Switch>
      <Route exact path='/' component={Courses} />
      <Route exact path='/learn' component={LearnPage} />
      <Route exact path='/courses' component={Courses} />
      <Route exact path='/courses/:_id' component={Course} />
      <Route exact path='/courses/:course_id/chapters/:chapter_id/sections/:section_id' component={CodeEditor} />
      <Route exact path='/my-bookmarks' component={Bookmarks} />
      <Route exact path='/video' component={CourseVideo} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/account' component={Account} />
    </Switch>
  );
};

export default Routes;