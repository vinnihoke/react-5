// React
import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
	// root: {
	//   flexGrow: 1,
	//   overflow: 'hidden',
	//   padding: theme.spacing(0, 3),
	// },
	paper: {
	  maxWidth: 700,
	  margin: `${theme.spacing(1)}px auto`,
	  padding: theme.spacing(2),
	},
 }));

const Form = (props) => {
	const classes = useStyles();

	const [member, setMember] = useState({
		name: '',
		email: '',
		role: '',
	})

	const handleChange = (e) => {
		setMember({...member, [e.target.name]: e.target.value});
	}

	const submit = (e) => {
		e.preventDefault();
		const addMember = {
			...member,
			id: Date.now()
		};
		props.addMember(addMember);
		// TODO Attempt to have a form reset here.
	}

	return(
		<Paper className={classes.paper}>
			<form className="Form" noValidate autoComplete="off" onSubmit={submit}>
				<TextField
				id="standard-textarea"
				name="name"
				label="First and last name"
				placeholder="Name"
				margin="normal"
				onChange={handleChange}
				/>
				<TextField
				id="standard-textarea"
				name="email"
				label="Enter an email"
				placeholder="Email"
				margin="normal"
				onChange={handleChange}
				/>
				<TextField
				id="standard-textarea"
				name="role"
				label="What is your current role?"
				placeholder="Current role"
				margin="normal"
				onChange={handleChange}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Paper>
	)
}

export default Form;
