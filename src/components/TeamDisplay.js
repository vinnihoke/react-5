// React
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
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
			{props.members.map(member => {
				return(
					<Grid item xs={12} key={member.id}>
						<TeamMember member={member}/>
					</Grid>
				)
			})}
		</Grid>
	)
}

export default TeamDisplay



