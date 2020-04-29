import React, { Component } from 'react';
import Home from './home';
import UserMovie from './userMovie';
import Login_page from './login_page';
import Logout from './logout';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 
class App extends Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/user" component={UserMovie} />
					<Route path="/login" component={Login_page} />
					<Route path="/logout" component={Logout} />
				</Switch>
			</Router>
		);
	}
}






export default App;
