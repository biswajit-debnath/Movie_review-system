import React, { Component } from 'react';
import './login.css'



class Login extends Component {

	render() {
		return (
			<div className="wrapper fadeInDown">
			  <div id="formContent">
			    {/*<!-- Tabs Titles -->*/}

			    {/*<!-- Icon -->*/}
			    <div className="fadeIn first">
			      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
			    </div>


			    <div id="alert" class={"alert alert-danger "+ this.props.alert_disply} role="alert" >
				  {this.props.alert_txt}
				</div>

			    {/*<!-- Login Form -->*/}
			    <form onSubmit={this.props.onSubmit}>
			      <input type="text" onChange={this.props.onChange} id="login" className="fadeIn second" placeholder="login" name="name" />
			      <input type="password" onChange={this.props.onChange} id="password" className="fadeIn third" placeholder="password" name="password" />
			      <input type="submit" className="fadeIn fourth" value="Log In" />
			    </form>

			    {/* <-- Remind Passowrd -->*/}
			    <div id="formFooter">
			      <a className="underlineHover" href="#">Forgot Password?</a>
			    </div>

			  </div>
			</div>
		);
	}
}






export default Login;
