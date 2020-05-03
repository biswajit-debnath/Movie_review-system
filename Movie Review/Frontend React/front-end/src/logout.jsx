import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


class Logout extends Component {
	constructor() {
	    super();
	    localStorage.removeItem('auth_token');
	    localStorage.removeItem('u_name');
	}

	render() {
		return (<Redirect to={"/"} />);
	}
}



export default Logout;