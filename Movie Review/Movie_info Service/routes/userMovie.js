const express = require("express");
const router = express.Router();
const publicMovies_data = require("../data");


router.post("/userMovie",(req,res)=>{
	

	const data_json = JSON.parse(publicMovies_data);
	
	const data = req.body.data;
	let list;
	let movie_list=[];

	data.map(user_movie=> {
	
	list=data_json.data.filter(item=> item.m_id == user_movie.m_id);
	list[0].rating=user_movie.rating;
	movie_list.push(list[0]); 

	});

	const data_json2={u_name:req.body.u_name,data:movie_list};



	res.json(data_json2);
});

module.exports = router;