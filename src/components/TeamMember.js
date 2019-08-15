import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const TeamMember = ({ member }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>
					{member.name.charAt(0).toUpperCase()}
				</Avatar>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">{member.name}</Typography>
            <Typography variant="subtitle1">{member.email}</Typography>
            <Typography variant="subtitle2">{member.role}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TeamMember;