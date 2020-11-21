import React, { useEffect, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

import PropTypes from 'prop-types';
const Main = React.lazy(() => import('./layouts/Mainpage'))

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Main}></Route>
    </Switch>
  );
};

export default Routes;