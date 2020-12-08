import React from 'react';
import { makeStyles, ListItem, ListItemText, Typography, ListItemIcon } from '@material-ui/core'
import { Done, Code, YouTube, Description } from '@material-ui/icons'
import { teal } from '@material-ui/core/colors';

import { Link } from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   grow: {
//     flexGrow: 1,
//   }
// }));

const CourseStep = props => {

  const getIcon = () => {
    switch(props.section.section_type) {
      case 'Code':
        return <Code style={{color: 'black'}} />;
      case 'Video':
        return <YouTube style={{color: 'black'}} />;
      default:
        return <Description style={{color: 'black'}} />;
    }
  }

  return (
    <Link to={`/sections/${props.section.section_id.$oid}`} className="clean-link">
      <ListItem button>
        <ListItemIcon style={{minWidth: '35px'}}>
          {getIcon()}
        </ListItemIcon>
        <ListItemText primary={props.section.title} />
        <Done style={{color: teal[500]}} />
        <Typography>{props.section.points}积分</Typography>
      </ListItem>
    </Link>
  );
};

export default CourseStep;