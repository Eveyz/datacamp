import React, { Suspense } from 'react';
import {AppContextProvider} from './AppContext'
// import Loading from './Loading'
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core'

const Routes = React.lazy(() => import('./Routes'))

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const App = (props) => {
  const classes = useStyles();

  return (
    <AppContextProvider path={props.location.pathname}>
      <Suspense fallback={
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      }>
        <Routes />
      </Suspense>
    </AppContextProvider>
  )
}

export default App