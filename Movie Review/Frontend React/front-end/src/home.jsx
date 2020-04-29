import React, { Component } from 'react';
import Nav from './components/nav';
import Movie_items from './components/movie_items';



class Home extends Component {
	constructor() {
	    super();
	    this.state = {
	      error: null,
	      isLoaded: false,
	      items: [],
	      login_state:"login"
	    };
	    console.log("constructor");
  	}


	componentDidMount() {
		this.state_check();
		fetch("http://localhost:5001/movieItem")
		  .then(res => res.json())
		  .then(
		    (result) => {
		      this.setState({
		        isLoaded: true,
		        items: result.data
		      });
		    },
		  (error) => {
		      this.setState({
		        isLoaded: true,
		        error
		      });
		    }
		)
	}

	state_check = () => {
		console.log("status_check");
		 if(localStorage.getItem("auth_token")) this.setState({login_state:"logout"});
		 else this.setState({login_state:"login"});
	};


	render() {
		return (
			<React.Fragment>
				<Nav state={this.state.login_state}/>
				<Movie_items data={this.state.items}/>
			</React.Fragment>
		);
	}
}



export default Home;