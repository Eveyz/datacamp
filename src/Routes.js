import React, { useEffect, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

import PropTypes from 'prop-types';
const Mainpage = React.lazy(() => import('./layouts/Mainpage'))

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Mainpage}></Route>
    </Switch>
  );
};

export default Routes;