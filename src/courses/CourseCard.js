import React from 'react';
import { Link } from 'react-router-dom'
import { withStyles, makeStyles, Card, CardHeader, Avatar, CardContent, Grid, Typography, Button, LinearProgress, Divider } from '@material-ui/core'
import { teal, blue } from '@material-ui/core/colors'
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
  avatar: {
    backgroundColor: blue[500],
    fontSize: '14px'
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

  const getTitle = () => {
    switch(props.course.language) {
      case 'Python':
        return Python;
      case 'R':
        return R;
      default:
        return props.course.language;
    }
  }

  return (
    <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={getTitle()} className={props.course.language !== "Python" && props.course.language !== "R" ? classes.avatar : ""} />
          }
          title={props.course.language}
          // subheader="September 14, 2016"
        />
        <CardContent className={classes.card}>
          <Link to={`/courses/${props.course._id.$oid}`} className="clean-link">
            <div className={classes.card}>
              <Typography variant="h5">{props.course.name}</Typography>
              <Typography variant="subtitle1">{props.course.description}</Typography>
            </div>
          </Link>
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
  );
};


export default CourseCard;