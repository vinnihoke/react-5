// React
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = () => {
	return (
			<AppBar position="static" color="secondary">
			<Toolbar>
				<Typography variant="h6" color="inherit">
					Know Your Team
				</Typography>
			</Toolbar>
			</AppBar>
	);
}

export default Navbar;