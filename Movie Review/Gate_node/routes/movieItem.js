const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const token_verify = require("../My_modules/token_verify");


router.post("/movieItem",async (req,res)=>{
	//Get the user data and check if the user is logged in
	token_response=token_verify(req);
	let rating_list={};
	if(token_response == 200) {
		//If token is correct then get the user ratings

		try{ 
			rating_list=await fetch('http://localhost:4000/userMovie', {
			 method: 'post',
			 body: JSON.stringify(req.body),
  			 headers: {
			    'Content-Type': 'application/json'
  			}
  		})
		.then(res_body=> res_body.json());
		}catch(err){
			console.log(err);
		}	  
	
	}
	

	console.log("rating_list",rating_list)
	

	let movie_des_list={}; //Final response object

	//Get all the movies for homepage
	try{ 
		movie_des_list=await fetch('http://localhost:3000/publicMovies')
		.then(res_body=> res_body.json());
		}catch(err){
			console.log(err);
		}


	
	console.log("movie_des",movie_des_list);




	//Get the avg rating for all home page movies and send the response 
	try{ 
	fetch('http://localhost:4000/avgRating')
		.then(res_body=> res_body.json())
	    .then(response => {
	    	//Combining avg rating to the movie list
	    	movie_des_list.data.map((mov_elmnt,i)=>{
	    		response.map(rat_elmnt=>{
	    			if(rat_elmnt.m_id == mov_elmnt.m_id){  
	    			 movie_des_list.data[i]["avg_rating"]= rat_elmnt.avg_rating;
	    			 movie_des_list.data[i]["avg_rating_count"]= rat_elmnt.count;
	    			}
	    		});
	    		//If the user is logged in join the user_rating data to public movie data
				if(token_response == 200){ 
					movie_des_list["u_name"]=rating_list.u_name;
					rating_list.data.map(user_rat_mov=>{
						if(user_rat_mov.m_id == mov_elmnt.m_id)   movie_des_list.data[i]["user_rating"]= user_rat_mov.rating;	
					});
				}
	    	});


	    	console.log("Home complete data",movie_des_list);
	    	res.json(movie_des_list);

	    });
		}catch(err){
			console.log(err);
		}


});


module.exports = router;