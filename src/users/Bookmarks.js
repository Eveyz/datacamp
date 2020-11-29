import React from 'react';
import { CssBaseline, makeStyles, Grid, Container, Typography, Card, CardContent, CardHeader, Avatar, LinearProgress, Button, Divider, Toolbar } from '@material-ui/core'
import { Search, Bookmark } from '@material-ui/icons'
import { teal } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const DrawerContent = React.lazy(() => import('../layouts/DrawerContent'))

const useStyles = makeStyles((theme) => ({
  large: {
    backgroundColor: teal[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  searchButton: {
    fontWeight: 'bold'
  }
}));

const Bookmarks = props => {
  const classes = useStyles();

  return (
    <div>
      <DrawerContent>
        <Container maxWidth="lg">
          <Typography variant="h5" gutterBottom>我的收藏</Typography>
          <br/>
          <Grid container direction="row" justify="center" alignItems="center">
            <Avatar size="large" className={classes.large}><Bookmark /></Avatar>
          </Grid>
          <br/>
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography variant="h4">目前还没有收藏课程</Typography>
          </Grid>
          <br/>
          <Grid container direction="row" justify="center" alignItems="center">
            <Link to='/courses' className='clean-link'>
              <Button variant="outlined" size="large" startIcon={<Search />} className={classes.searchButton}>查看课程</Button>
            </Link>
          </Grid>
        </Container>
      </DrawerContent>
    </div>
  );
};

export default Bookmarks;