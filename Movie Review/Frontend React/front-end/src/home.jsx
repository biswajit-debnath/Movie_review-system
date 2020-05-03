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
	      login_state:"login",
	      u_name:"",

	    };
	    console.log("constructor");
  	}


	componentDidMount() {
		const bearer = 'Bearer ' + localStorage.getItem('auth_token');
		let user={u_name:localStorage.getItem('u_name')};
		this.token_check_local();
		fetch("http://localhost:5001/movieItem",{
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
		      this.setState({
		        isLoaded: true,
		        items: result.data,
		        u_name:result.u_name
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

	token_check_local = () => {
		console.log("status_check");
		 if(localStorage.getItem("auth_token")) this.setState({login_state:"logout"});
		 else this.setState({login_state:"login"});
	};


	render() {
		if(this.state.isLoaded == true)
		return (
			<React.Fragment>
				<Nav state={this.state.login_state} u_name={this.state.u_name}/>
				<Movie_items data={this.state.items} u_name={this.state.u_name}/>
			</React.Fragment>
		);
		return(<h1>Loading</h1>)
	}
}



export default Home;