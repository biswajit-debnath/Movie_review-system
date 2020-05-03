import React, { Component } from 'react';
import Rating from './rating';




class Rating_model extends Component {
	constructor() {
	    super();
	    this.state = {
	      error: null,
	      isLoaded: false,
	      redirect:null,
	      login_state:"logout"
	    };
  	}



	render() {
		return (
			<div className="modal fade" id={"Modal_"+this.props.data.m_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				  <div className="modal-dialog modal-dialog-centered" role="document">
				    <div className="modal-content" style={{width:'70%'}}>
				      <div className="modal-header">
				        <h5 className="modal-title" id="exampleModalLongTitle">Rate the Movie</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				      	<h3>{this.props.data.name}</h3>
				      	<div><span className="mr-5">My Rating</span><Rating rate={this.props.data.user_rating}/></div>
				      
				      	<br />
				      	<label>Rate in between 1-5</label>
						<div class="input-group mb-3" style={{width:'60%'}}>
						  <div class="input-group-prepend">
						    <span class="input-group-text"><span className="fa fa-star checked"></span></span>
						  </div>
						  <input type="number" onChange={this.props.onChange_handler}
						   class="form-control" aria-label="Amount (to the nearest dollar)" />
						</div>
						<button onClick={()=>this.props.changeRating_handler(this.props.data.m_id)} data-dismiss="modal" className="btn btn-primary">Save changes</button>
				      </div>

				    </div>
				  </div>
			</div>

		)
	}
}




export default Rating_model;