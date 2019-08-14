// React
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
	// AppBar: {
	// 	top: "50px",
	// }
}

const Navbar = () => {
	return (
			<AppBar position="fixed" style={styles.AppBar} color="secondary">
			<Toolbar>
				<Typography variant="h6" color="inherit">
					Photos
				</Typography>
			</Toolbar>
			</AppBar>
	);
}

export default Navbar;