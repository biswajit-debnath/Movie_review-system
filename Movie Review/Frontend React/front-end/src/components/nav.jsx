import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {

	render() {
		return (
			<nav className="mb-4 navbar navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand">Navbar</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNavDropdown">
			    <ul className="navbar-nav">
			   	  <Link to="/">
			      <li className="nav-item active">
			        <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
			      </li>
			      </Link>
			      <Link to="/user">
			      <li className="nav-item">
			        <a className="nav-link">My Movies</a>
			      </li>
			      </Link>
			      <Link to={"/" +this.props.state}>
			      <li className="nav-item ">
			        <a className="nav-link">{this.props.state}</a>
			      </li>
			      </Link>
			    </ul>
			  </div>
			</nav>
			)
	}
}

export default Nav;