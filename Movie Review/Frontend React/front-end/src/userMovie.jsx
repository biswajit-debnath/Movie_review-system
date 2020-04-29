import React, { Component } from 'react';
import Nav from './components/nav';
import Movie_items from './components/movie_items';
import Cookies from 'js-cookie';
import {fetch} from 'whatwg-fetch';
import { Redirect } from "react-router-dom";;



class UserMovie extends Component {
	constructor() {
	    super();
	    this.state = {
	      error: null,
	      isLoaded: false,
	      items: [],
	      redirect:null,
	      login_state:"logout"
	    };
  	}


	componentDidMount() {
		const bearer = 'Bearer ' + localStorage.getItem('auth_token');
		let user={u_name:"Biswajit"};
		console.log();
		fetch("http://localhost:5001/userMovie",{ 
			method: 'POST', 
			headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        	},
			body: JSON.stringify(user) 
		})
		  .then(res => res.json())
		  .then(
		    (result) => {
		    	if(result.status != 401){
			      this.setState({
			        isLoaded: true,
			        items: result.data
			      });
		  		}
		      else {
		      	this.setState({redirect: "/login?valid=none"});
		      }
		    },
		    (error) => {
		      this.setState({
		        isLoaded: true,
		        error
		      });
		    }
		)
	}


	render() {
		if (this.state.redirect)
	    	return (<Redirect to={this.state.redirect} />);
		return (
			<React.Fragment>
				<Nav state={this.state.login_state}/>
				<Movie_items data={this.state.items}/>
			</React.Fragment>
		);
	}
}






export default UserMovie;
