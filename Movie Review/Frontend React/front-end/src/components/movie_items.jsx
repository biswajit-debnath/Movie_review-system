import React, { Component } from 'react';
import Movie_item from './movie_item';
import './item.css';



class Movie_items extends Component {

	render() {
		return (
			<div className="row row_center">
				{this.props.data.map(item=> (
					
						<div className="col col_width">
							<Movie_item key={item.id} data={item}/>
						</div>
					
				))
				}
			</div>
			
			
		);
	}
}






export default Movie_items;
