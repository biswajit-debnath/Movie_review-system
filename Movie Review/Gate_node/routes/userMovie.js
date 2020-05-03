const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const token_verify = require("../My_modules/token_verify");


router.post("/userMovie",async (req,res)=>{

	response=token_verify(req);
	if(response != 200) res.json({status:401});

	
	//getting the user id
	let user_name= req.body.u_name;
	console.log(user_name)
	// const movies = {u_name:"Biswajit",data:[
	// 				{m_id:1, rating:3},
	// 				{m_id:3, rating:5},
	// 				{m_id:5, rating:2}
	// 	]};

	let rating_list={};
	//Getting all the movies rated by the user
	//	Calling the Rating Service
	try{ 
	rating_list=await fetch('http://localhost:4000/userMovie', {
			 method: 'post',
			 body: JSON.stringify(req.body),
  			 headers: {
			    'Content-Type': 'application/json'
  			}
  		})
		.then(res_body=> res_body.json())
	    .then(response => response);
		}catch(err){
			console.log(err);
	}	  
	

	//Getting the info of all the movies rated by the user
		//Calling the Movie info service
	try{ 
	fetch('http://localhost:3000/userMovie', {
			 method: 'post',
			 body: JSON.stringify(rating_list),
  			 headers: {
			    'Content-Type': 'application/json'
  			}
  		})
		.then(res_body=> res_body.json())
	    .then(response => res.json(response));
		}catch(err){
			console.log(err);
	}

});

module.exports = router;