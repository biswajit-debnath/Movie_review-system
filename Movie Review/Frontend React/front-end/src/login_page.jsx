import React, { Component } from 'react';
import Login from './components/login';
import { Redirect } from "react-router-dom";




class Login_page extends Component {
	constructor() {
        super();
        this.state = {
          name: '',
          password: '',
          isLoaded: false,
          redirect:null,
          isLoaded:false,
          alert_disply:"d-none",
          alert_txt:""
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    
    url_checker=()=>{
    	const urlParams = new URLSearchParams(window.location.search);
    	const myParam = urlParams.get('valid');
    	console.log(myParam);
    }

    onSubmit = (e) =>{
    	e.preventDefault();
    	this.url_checker();
    	fetch('http://localhost:5001/login', {
				 method: 'post',
				 body: JSON.stringify(this.state),
	  			 headers: {
				    'Content-Type': 'application/json'
	  			}
	  		})
		  .then(res => res.json())
		  .then(
		    (result) => {
		      this.setState({
		        isLoaded: true,
		      });
		      if(result.status == 200) {
		      	localStorage.setItem('auth_token',result.auth_token);
		      	this.setState({redirect: "/"});

		      }
		      else {
		      	this.setState({alert_disply:"d-block",alert_txt:"Wrong Credentials"});
		      }
				//Logic for wrong credentials		      	
		    },
		    // Note: it's important to handle errors here
		    // instead of a catch() block so that we don't swallow
		    // exceptions from actual bugs in components.
		    (error) => {
		      this.setState({
		        isLoaded: true,
		        error
		      });
		    }
		)

    };

    


	render() {
	  if (this.state.redirect)
	    return (<Redirect to={this.state.redirect} />);
	  return (
		<React.Fragment>
			<Login 
			onChange={this.onChange}
			onSubmit={this.onSubmit}
			alert_disply={this.state.alert_disply}
			alert_txt={this.state.alert_txt}
			/>
		</React.Fragment>
		);
	}
}




export default Login_page;
