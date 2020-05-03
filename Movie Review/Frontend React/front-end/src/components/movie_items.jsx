import React, { Component } from 'react';
import Movie_item from './movie_item';
import Rating_model from './popup_rating';
import { Redirect } from "react-router-dom";
import './item.css';



class Movie_items extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      redirect:null,
	      data:this.props.data,
	      rating_to_change:null
	    };
  	}

  	



  	//To check locally if the token is available to make request to backend
	login_checker=()=>{
		if(localStorage.getItem('auth_token') == null)
			this.setState({redirect:"/login?valid=none"});
  	};

  	//PopUp to rate the movie is rendered if the user has the token locally
  	//*****To verfy if the token is valid from server side 
  	render_if_loggedin=(item)=>{
  		if(localStorage.getItem('auth_token') != null)
  			return (<Rating_model changeRating_handler={this.changeRating_handler} onChange_handler={this.onChange_handler} data={item} u_name={this.props.u_name} />)
  	};









	//If rating input box has some value then store it in the current state
  	onChange_handler=(e)=>{
  		let rating_val = parseInt(e.target.value);
  		this.setState({rating_to_change:rating_val});
  	};

  	//If the rating submitted change the rating locally then send the it to the backend
  	changeRating_handler=(id)=>{
  		let data = [...this.props.data];
  		data.map((movie,i)=>{
  			if(movie.m_id == id) data[i].user_rating=this.state.rating_to_change;
  		});	
  		this.setState({data});



  		//Send the change rating to backend
  		//*****To handle the err if req cannot be send
  		this.login_checker();
  		const bearer = 'Bearer ' + localStorage.getItem('auth_token');
		let user_new_rating={u_name:localStorage.getItem('u_name'),rating:this.state.rating_to_change, m_id:id};
		fetch("http://localhost:5001/changeRating",{
			method: 'POST', 
			headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        	},
			body: JSON.stringify(user_new_rating) 
		});



  	};

 	




	render() {
		if(this.state.redirect)
	    	return (<Redirect to={this.state.redirect} />);
		return (
			<div className="row row_center">
				{/* Render each movie item*/}
				{this.state.data.map(item=> (
					<div key={item.m_id}>
						{/*Modal tag to activate the modal*/}
						<span className="movie_hover" onClick={this.login_checker} data-toggle="modal" data-target={"#Modal_"+ item.m_id}>
							<div className="col col_width ">
								<Movie_item key={item.m_id} data={item} />
							</div>
						
						</span>
						{this.render_if_loggedin(item)}		
					</div>
				))}
			</div>
		);
	}
}






export default Movie_items;
