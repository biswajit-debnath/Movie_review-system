import React, { Component } from 'react';
import './login.css';

class Rating extends Component {

	rating_item =()=>{
		if(!this.props.rate){
			return(<small>Not Rated</small>);
		}
		let rating=[];
		let rate=this.props.rate;
		for(let i=1;i<6;i++){
			if(i<= rate){
				rating.push(<span className="fa fa-star checked"></span>)
			}
			else {
				rating.push(<span className="fa fa-star"></span>)
			}	
		}
		if(this.props.count)
		rating.push(<span> ({this.props.count})</span>)
		return rating;
	};

	render(){
		return(
			<div className={"d-inline-block "}>
				{this.rating_item()}
			</div>


			);
	}

}


export default Rating;