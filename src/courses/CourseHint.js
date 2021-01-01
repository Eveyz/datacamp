import React from 'react'
import { Typography, Button, Toolbar, makeStyles } from '@material-ui/core'
import parse from 'html-react-parser'
import VisibilityIcon from '@material-ui/icons/Visibility'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: '48px',
    backgroundColor: '#FFF2B3',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  hints: {
    backgroundColor: '#FFFBE5',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    '& ul': {
      paddingLeft: theme.spacing(2),
      marginTop: '0px'
    },
    '& ul li': {
      marginBottom: theme.spacing(1)
    }
  },
  ul: {
    paddingLeft: theme.spacing(2)
  },
  icon: {
    marginRight: theme.spacing(1)
  },
}))

const CourseHint = props => {
  const classes = useStyles()

  const useSolution = () => {

  }

  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <EmojiObjectsIcon fontSize="small" className={classes.icon} />
        <Typography variant="subtitle1">提示</Typography>
      </Toolbar>
      <div className={classes.hints}>{parse(props.hint.replace(/↵/g, "\n"))}</div>
      <Button variant="contained" color="secondary" startIcon={<VisibilityIcon />} className={classes.button} onClick={useSolution}>查看答案 -70分</Button>
    </div>
  )
}

export default CourseHint;