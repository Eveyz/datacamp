import React from 'react';
import { withStyles, makeStyles, Grid, Card, CardContent, Typography, Avatar, Button, LinearProgress, Toolbar, Chip, Accordion, AccordionSummary, List } from '@material-ui/core';
import { teal, yellow } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CourseStep = React.lazy(() => import('./CourseStep'))

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold'
  },
  toolbar: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(2),
    backgroundColor: 'black'
  },
  progress: {
    width: '20%'
  },
  chip: {
    backgroundColor: yellow[500],
    marginLeft: theme.spacing(2)
  },
  button: {
    fontWeight: 'bold',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    backgroundColor: teal[500],
    '&:hover': {
      backgroundColor: teal[700],
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

const CourseChapter = props => {

  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid item xs={12}>
      <Card>
        <CardContent style={{paddingTop: '0px'}}>
          <Toolbar className={classes.toolbar}>
            <Avatar className={classes.avatar}>1</Avatar>
            <Typography className={classes.title}>
              {props.chapter.name}
            </Typography>
            <Chip size="small" label={'免费'} className={classes.chip} />
            <div className={classes.grow} />
            <Typography variant="subtitle1" color="textSecondary">
              8%
            </Typography>
            <div className={classes.progress}>
              <CustomLinearProgress variant="determinate" value={40} />
            </div>
          </Toolbar>
          <Typography gutterBottom>
            {props.chapter.description}
          </Typography>
          <Button variant="contained" color="primary" size="large" className={classes.button}>继续学习</Button>
        </CardContent>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="h6" className={classes.heading}>查看课程章节内容</Typography>
            </AccordionSummary>
            <List component="nav" aria-label="main mailbox folders">
              {
                props.chapter.sections.map((section, idx) => {
                  return <CourseStep key={idx} course_id={props.course_id} chapter_id={props.chapter.chapter_id.$oid} section={section} />
                })
              }
            </List>
          </Accordion>
      </Card>
    </Grid>
  );
};


export default CourseChapter;