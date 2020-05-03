import React, { Component } from 'react';
import Login from './components/login';
import { Redirect } from "react-router-dom";
import Nav from './components/nav';





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
    	
    	const myParam = new URLSearchParams(this.props.location.search).get("valid");
    	if(myParam == "none")
    		this.setState({alert_disply:"danger d-block",alert_txt:"You are not logged in"});
    	else if(myParam == "correct")
    		this.setState({alert_disply:"success d-block",alert_txt:"Account created succesfully"});
    }

    onSubmit = (e) =>{
    	e.preventDefault();
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
		      	localStorage.setItem('u_name',result.u_name);
		      	this.setState({redirect: "/"});

		      }
		      else if(result.status == 401) this.setState({alert_disply:"danger d-block",alert_txt:result.err});
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

	componentDidMount() {
		this.url_checker();
	}    

    


	render() {
	  
	  if (this.state.redirect)
	    return (<Redirect to={this.state.redirect} />);
	  return (
		<React.Fragment>
			<Nav />
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
