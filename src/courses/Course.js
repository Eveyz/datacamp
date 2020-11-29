import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Toolbar, CssBaseline, Container, Grid, Button, Card, CardContent, CardActions, Box } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import TimerIcon from '@material-ui/icons/Timer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import Header from '../users/ProfileHeader'

const Drawer = React.lazy(() => import('../layouts/Drawer'))

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  topCard: {
    backgroundColor: '#05192D'
  },
  topCardPadding: {
    paddingLeft: '0px'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    fontWeight: 'bold'
  },
  bookMarkButton: {
    marginLeft: theme.spacing(2),
    border: "1px solid white",
    color: "white",
    '&:hover': {
      border: "1px solid white",
      color: "white",
      opacity: 0.8
    },
  }
}));

const drawerWidth = 240;

const Course = props => {

  const classes = useStyles()

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Drawer />
        <main className={classes.content}>
          <Toolbar />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card className={classes.topCard}>
                <Container maxWidth={'lg'}>
                  <CardContent className={classes.topCardPadding}>
                    <Typography variant="h5" style={{color: '#9BA3AB', marginTop: '30px'}}>
                      互动课程
                    </Typography>
                    <Typography variant="h3" style={{color: 'white'}} gutterBottom>
                      Python入门
                    </Typography>
                    <Button variant="contained" color="secondary" size="large" className={classes.button}>免费开始</Button>
                    <Button variant="outlined" color="primary" size="large" className={classes.bookMarkButton} startIcon={<BookmarkBorderIcon />}>收藏</Button>
                    <Box alignItems="flex-start" display="flex" style={{color: 'white', marginTop: '40px'}}>
                      <Box>
                        <TimerIcon fontSize="small" />
                      </Box>
                      <Box style={{marginLeft: '5px'}}>
                        4小时
                      </Box>
                      <Box style={{marginLeft: '20px'}}>
                        <PeopleOutlineIcon fontSize="small" />
                      </Box>
                      <Box style={{marginLeft: '5px'}}>
                        45000人学习
                      </Box>
                      <Box style={{marginLeft: '20px'}}>
                        <MonetizationOnIcon fontSize="small" />
                      </Box>
                      <Box style={{marginLeft: '5px'}}>
                        4700XP
                      </Box>
                    </Box>
                  </CardContent>
                </Container>
              </Card>
            </Grid>
          </Grid>
          <Container maxWidth={'lg'}>
            <br></br>
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <Typography variant="h5" gutterBottom>
                  课程简介
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Python is a general-purpose programming language that is becoming ever more popular for data science. Companies worldwide are using Python to harvest insights from their data and gain a competitive edge. Unlike other Python tutorials, this course focuses on Python specifically for data science. In our Introduction to Python course, you’ll learn about powerful ways to store and manipulate data, and helpful data science tools to begin conducting your own analyses. Start DataCamp’s online Python curriculum now.
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Card className={classes.root}>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Word of the Day
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                          adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                          well meaning and kindly.
                          <br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default Course;