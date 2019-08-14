// React
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

// Local 
import TeamMember from './TeamMember';

const useStyles = makeStyles(theme => ({
	container: {
	  display: 'grid',
	  flexFlow: 'column',
	  gridTemplateColumns: 'repeat(12, 1fr)',
	  gridGap: theme.spacing(3),
	  marginTop: '50px',
	},
	divider: {
	 margin: theme.spacing(2, 0),
  },
}));

const TeamDisplay = (props) => {
	return(
		<Grid container>
			{props.members.map((member, id) => {
				return(
					<Grid item xs={12}>
						<TeamMember key={id} member={member}/>
					</Grid>
				)
			})}
		</Grid>
	)
}

export default TeamDisplay



