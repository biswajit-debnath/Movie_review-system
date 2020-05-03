import React, { Component } from 'react';
import Rating from './rating';

class Movie_item extends Component {
	constructor(props){
		super(props);
		this.state = {
			avgRating:this.props.avg_rating
		};
	}

	userRating=()=>{
	 if(localStorage.getItem('auth_token')){
		  return(
		  	<div>
		  		<div>
		  		<p>My Rating</p>
		  		<Rating  rate={this.props.data.user_rating || this.props.data.rating }/>
				</div>
			</div>
		  	)}
		
	};

	avgRatingAvailable=()=>{
		if(this.props.data.avg_rating){
			return (<div>
						<div>
						<p>Avg Rating</p>
			    		<Rating count={this.props.data.avg_rating_count} rate={this.props.data.avg_rating}/>
			    		</div>
			    	</div>
			)
		}
	};
	

	render() {
		return (
			<div className="card" style={{ width: '17rem' }}>
			  <img className="card-img-top" src={require('../img/inception.jpg')} style={{ height:'22rem'}} />
			  <div className="card-body">
			    <h5 className="card-title">{this.props.data.name}</h5>
			    <p className="card-text">{this.props.data.des}</p>
				<div style={{display:"flex","justify-content": "space-between"}} >
					{this.avgRatingAvailable()}
			    	
			    	{this.userRating()}
			    	
			    </div>
			  </div>
			</div>
			);
	}
}

export default Movie_item;