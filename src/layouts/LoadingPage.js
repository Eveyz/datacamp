import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core'

const LoadingPage = props => {
  return (
    <Grid container direction="row" justify="center" alignItems="center" style={{height: '100vh'}}>
      <CircularProgress />
    </Grid>
  )
}

export default LoadingPage;