const express = require("express");
const router = express.Router();



router.put("/changeRating",(req,res)=>{

	let my_movies=JSON.parse(JSON.stringify(movies));
	console.log("Rating Changed",req.body);
	const { u_name,rating,m_id} = req.body;
	my_movies.map((user,i)=>{
		if(user.u_name == u_name){
			// user.data.map(movie=>{
			// 	if(movie.m_id == m_id){
			// 		movie.rating = rating;

			// 		res.end()}
			// })
			let found_elmnt = user.data.find(movie=> movie.m_id == m_id)
			if(found_elmnt){ 
				let index = user.data.indexOf(found_elmnt);
				movies[i].data[index].rating = rating;
				res.end();	
			}
			// 	user.data[index].rating = rating;
			else {
				movies[i].data.push({m_id:m_id, rating:rating});
				res.end();
			}
		}
	});
});

module.exports = router;