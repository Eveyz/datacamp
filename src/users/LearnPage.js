import React from 'react';
import { makeStyles, Container, Card, CardContent, List, Typography, Toolbar, Box, CircularProgress, Grid, Button, Avatar, Chip } from '@material-ui/core'
import { green, blue, teal, purple, yellow } from '@material-ui/core/colors'
import { Link } from 'react-router-dom';

const DrawerContent = React.lazy(() => import('../layouts/DrawerContent'))
const CourseStep = React.lazy(() => import('../courses/CourseStep'))

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(2),
    backgroundColor: purple[500]
  },
  title: {
    fontWeight: 'bold'
  },
  progress: {
    color: green[500]
  },
  button: {
    backgroundColor: teal[500], 
    marginTop: '20px', 
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: teal[600],
    },
  },
  chip: {
    backgroundColor: yellow[500]
  }
}));

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" style={{color: green[500], width: '45px', height: '45px'}} {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" style={{color: '#4A4A4A', fontWeight: 'bold'}}>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const LearnPage = props => {
  const classes = useStyles()

  return (
    <div>
      <DrawerContent match={props.match}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Avatar className={classes.avatar}>NZ</Avatar>
            <Typography className={classes.title} variant="h6">
              Ningzhou Zeng 
            </Typography>
            <div className={classes.grow} />
            <Typography className={classes.title} variant="subtitle1">
              总积分:
            </Typography>
            <Chip className={classes.chip} size="small" label="1000" />
          </Toolbar>
          <br/>
          <Card>
            <CardContent>
              <Typography className={classes.title} variant="h6">
                <Chip className={classes.chip} label="加入会员" />
              </Typography>
              <Typography variant="subtitle1">加入会员，享受无限制学习体验。<Link to='/upgrade' style={{color: blue[500]}}>立刻免费体验</Link></Typography>
              
            </CardContent>
          </Card>
          <br/>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Typography variant="h6">当前课程</Typography>
              <Card>
                <CardContent>
                  <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h4">
                      Python基础知识
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                      <CircularProgressWithLabel value={50} />
                    </div>
                  </Toolbar>
                  <Typography variant="h6">当前章节</Typography>
                  <List component="nav" aria-label="main mailbox folders" style={{backgroundColor: blue[50], padding: '0px', marginTop: '10px'}}>
                    <CourseStep />
                    <CourseStep />
                    <CourseStep />
                  </List>
                  <Button size="large" variant="contained" color="primary" className={classes.button}>继续学习</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">练习</Typography>
              <Card>
                <CardContent>
                  <Typography>Introduction to HTML</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </DrawerContent>
    </div>
  );
};

export default LearnPage;