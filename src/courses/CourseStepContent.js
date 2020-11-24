import React from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { amber } from '@material-ui/core/colors'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import Chip from '@material-ui/core/Chip'
import EventNoteIcon from '@material-ui/icons/EventNote'

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100vh",
    overflow: 'scroll'
  },
  section: {
    backgroundColor: 'white',
    padding: theme.spacing(2)
  },
  instruction: {
    backgroundColor: 'white',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    minHeight: '100vh'
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
  padding: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  chip: {
    backgroundColor: amber[500]
  },
  ul: {
    paddingLeft: theme.spacing(2)
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

const CourseStepContent = props => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.padding}>
        <Grid container direction="row" alignItems="center">
          <EventNoteIcon fontSize="small" className={classes.icon} /> <Typography variant="subtitle1">练习</Typography>
        </Grid>
      </div>
      <div className={classes.section}>
        <Typography variant="h5">载入一个DataFrame</Typography>
        <Typography variant="subtitle1">The code in the script editor should plot information from the DataFrame that we loaded in the previous exercise.

          However, there is an error in function syntax. Remember that common function errors include:

          Forgetting closing parenthesis
          Forgetting commas between each argument
          Note that all arguments to the functions are correct. The problem is in the function syntax.
        </Typography>
      </div>
      <div className={classes.padding}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="subtitle1">指导</Typography>
          <Chip label="100XP" size="small" className={classes.chip} />
        </Grid>
      </div>
      <div className={classes.instruction}>
        <ul className={classes.ul}>
          <li>使用pd.read_csv来从一个叫ransom.csv的CSV文件中加载数据。这个文件记录了每一个字母在ransom给Bayes的信件的频率。</li>
        </ul>
        <Button variant="outlined" startIcon={<EmojiObjectsIcon />} className={classes.button}>使用提示 -30XP</Button>
      </div>
    </div>
  );
};

export default CourseStepContent;