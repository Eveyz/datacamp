import React from 'react';
import { makeStyles, Typography } from '@material-ui/core/'
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: 'white',
    backgroundColor: '#15141F'
  }
}));

const ShellOutput = props => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.title}>
        <Typography variant="subtitle2" style={{fontWeight: 'bold'}}>Shell</Typography>
      </div>
      <div style={{overflowY: 'scroll', height: '30vh', padding: '10px', backgroundColor: '#202124'}}>
        {
          props.result ?
          props.result.stderr ?
          <div style={{color: red[500], whiteSpace: 'pre-wrap'}}>
            {props.result.stderr}
          </div>
          :
          <div style={{color: 'white', whiteSpace: 'pre-wrap'}}>
            {props.result.stdout}
          </div>
          :
          ""
        }
      </div>
    </div>
  );
};

export default ShellOutput;