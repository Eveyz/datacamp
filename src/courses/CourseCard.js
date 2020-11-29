import React from 'react';
import { Link } from 'react-router-dom'
import { withStyles, makeStyles, Card, CardHeader, Avatar, CardContent, Grid, Typography, Button, LinearProgress, Divider } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'
import Python from '../images/python.svg'
import R from '../images/r.svg'

const useStyles = makeStyles((theme) => ({
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
}));

const CustomLinearProgress = withStyles((theme) => ({
  colorPrimary: {
    backgroundColor: theme.palette.grey[200],
  },
  bar: {
    backgroundColor: teal[500],
  },
}))(LinearProgress);

const CourseCard = props => {
  const classes = useStyles()

  return (
    <Link to="/courses/1" className="clean-link">
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
    </Link>
  );
};


export default CourseCard;