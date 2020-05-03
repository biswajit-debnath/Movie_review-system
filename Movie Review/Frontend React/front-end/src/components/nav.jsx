import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {

	signInShowHandler=()=>{
		if(this.props.state == "login") 
			return(<span className="nav-item ">
			      <Link to="/sign">
			        <span className="nav-link">Sign In</span>
			      </Link>
			    </span>)
		return(<span className="nav-item ">
			        <span className="navbar-text">{this.props.u_name}</span>
			    </span>)

	};

	render() {
		return (
			<nav className="mb-4 navbar navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand">
			  <img src={require('../img/login2.png')} width="30" height="30" alt="" />
			  </a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    			<span class="navbar-toggler-icon"></span>
 			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav mr-auto">
			   	  
			      <li className="nav-item active">
			      <Link to="/">
			        <span className="nav-link" >Home <span className="sr-only">(current)</span></span>
			      </Link>
			      </li>
			      
			      
			      <li className="nav-item">
			      <Link to="/user">
			        <span className="nav-link">My Movies</span>
			      </Link>
			      </li>

			    </ul>
			    {this.signInShowHandler()}
			    <span className="nav-item ">
			      <Link to={"/" +this.props.state}>
			        <span className="nav-link">{this.props.state}</span>
			      </Link>
			    </span>
			  </div>
			</nav>
			)
	}
}

export default Nav;