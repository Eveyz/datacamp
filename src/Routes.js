import React, { useEffect, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

const Profile = React.lazy(() => import('./users/Profile'))
const Account = React.lazy(() => import('./users/Account'))

const Course = React.lazy(() => import('./courses/Course'))
const Courses = React.lazy(() => import('./courses/Courses'))
const MainPage = React.lazy(() => import('./layouts/Mainpage'))

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage}></Route>
      <Route exact path='/courses' component={Courses}></Route>
      <Route exact path='/courses/:_id' component={Course}></Route>
      <Route exact path='/profile' component={Profile}></Route>
      <Route exact path='/account' component={Account}></Route>
    </Switch>
  );
};

export default Routes;