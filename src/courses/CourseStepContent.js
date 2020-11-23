import React from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: 'white'
  },
  title: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: 'white',
  },
  button: {
    marginRight: theme.spacing(2),
    border: "2px solid rgb(5, 25, 45)",
    color: "rgb(5, 25, 45)",
    '&:hover': {
      boxShadow: 'none',
      opacity: 0.8
    },
  },
}));

const CourseStepContent = props => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Typography variant="h6">练习</Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h4">载入一个DataFrame</Typography>
      </div>
      <Typography variant="h6">指导</Typography>
      <div className={classes.section}>
        <ul>
          <li>Use pd.read_csv to load data from a CSV file called ransom.csv. This file represents the frequency of each letter in the ransom note for Bayes.</li>
        </ul>
        <Button variant="outlined" startIcon={<EmojiObjectsIcon />} className={classes.button}>使用提示 -30XP</Button>
      </div>
    </div>
  );
};

export default CourseStepContent;