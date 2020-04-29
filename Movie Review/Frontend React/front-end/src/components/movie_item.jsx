import React, { Component } from 'react';

class Movie_item extends Component {
	

	render() {
		return (

			<div className="card" style={{ width: '17rem' }}>
			  <img className="card-img-top" src={require('../img/inception.jpg')} style={{ height:'22rem'}} />
			  <div className="card-body">
			    <h5 className="card-title">{this.props.data.name}</h5>
			    <p className="card-text">{this.props.data.des}</p>
			    <a href="#" className="btn btn-primary">Rating is {this.props.data.rating}</a>
			  </div>
			</div>
			);
	}
}

export default Movie_item;