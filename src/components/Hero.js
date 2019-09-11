import React from 'react';

const heroStyles = {
	backgroundImage: 'url(https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1961&q=80)',
	backgroundAttachment: 'fixed',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	height: '300px',
}

const Hero = () => {
	return(
		<>
		<div className="Hero" style={heroStyles}></div>
		</>
	)
}

export default Hero;