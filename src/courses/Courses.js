import React from 'react';
import { withStyles, makeStyles, Grid, Container, Typography, Card, CardContent, CardHeader, Avatar, LinearProgress, Button, Divider } from '@material-ui/core'
import { teal, blue } from '@material-ui/core/colors';
import Python from '../images/python.svg'
import R from '../images/r.svg'
import { Link } from 'react-router-dom';

const DrawerContent = React.lazy(() => import('../layouts/DrawerContent'))

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  progress: {
    width: '50%',
    marginLeft: '10px'
  },
  card: {
    minHeight: '150px'
  },
  button: {
    fontWeight: 'bold',
    // backgroundColor: teal[500]
  },
  newButton: {
    backgroundColor: teal[500],
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: teal[600],
    },
  },
  avatar: {
    backgroundColor: blue[500],
    fontSize: '14px'
  },
  linkStyle: {
    textDecoration: 'none'
  }
}));

const CustomLinearProgress = withStyles((theme) => ({
  colorPrimary: {
    backgroundColor: theme.palette.grey[200],
  },
  bar: {
    backgroundColor: teal[500],
  },
}))(LinearProgress);

const Courses = props => {
  const classes = useStyles();

  return (
    <div>
      <DrawerContent match={props.match}>
        <Container maxWidth="lg">
          <Typography variant="h5" gutterBottom>300个课程</Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Card>
                <Link to='/courses/1' className={classes.linkStyle}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" src={Python} />
                    }
                    title="Python"
                    subheader="September 14, 2016"
                  />
                  <CardContent>
                    <div className={classes.card}>
                      <Typography variant="h5">Python以及数据分析入门</Typography>
                      <Typography variant="subtitle1">掌握基础的Python数据分析。通过学习numpy科学计算来拓展你的技能。</Typography>
                    </div>
                    <Grid container direction="row" justify="flex-start" alignItems="center">
                      <Typography variant="subtitle1" color="textSecondary">
                        8%
                      </Typography>
                      <div className={classes.progress}>
                        <CustomLinearProgress variant="determinate" value={40} />
                      </div>
                    </Grid>
                  </CardContent>
                </Link>
                <Divider/>
                <CardContent>
                  <Link to='courses/1' className={classes.linkStyle}>
                    <Button variant="outlined" size="large" className={classes.button}>继续学习</Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" src={R} />
                  }
                  title="R"
                  // subheader="September 14, 2016"
                />
                <CardContent className={classes.card}>
                  <div className={classes.card}>
                    <Typography variant="h5">Introduction to Python</Typography>
                    <Typography variant="subtitle1">Master the basic of data analysis in Python. Expand</Typography>
                  </div>
                  <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Typography variant="subtitle1" color="textSecondary">
                      8%
                    </Typography>
                    <div className={classes.progress}>
                      <CustomLinearProgress variant="determinate" value={70} />
                    </div>
                  </Grid>
                </CardContent>
                <Divider/>
                <CardContent>
                  <Button variant="outlined" size="large" className={classes.button}>继续学习</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>SQL</Avatar>
                  }
                  title="SQL"
                  // subheader="September 14, 2016"
                />
                <CardContent className={classes.card}>
                  <div className={classes.card}>
                    <Typography variant="h5">Introduction to Python</Typography>
                    <Typography variant="subtitle1">Master the basic of data analysis in Python. Expand</Typography>
                  </div>
                  <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Typography variant="subtitle1" color="textSecondary">
                      8%
                    </Typography>
                    <div className={classes.progress}>
                      <CustomLinearProgress variant="determinate" value={90} />
                    </div>
                  </Grid>
                </CardContent>
                <Divider/>
                <CardContent>
                  <Button variant="contained" color="primary" size="large" className={classes.newButton}>开始课程</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </DrawerContent>
    </div>
  );
};

export default Courses;