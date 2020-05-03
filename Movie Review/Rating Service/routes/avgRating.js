const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/avgRating",async(req,res)=>{

	let rating_list=JSON.parse(JSON.stringify(movies));
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

	console.log("ratingList",rating_list[0].data)

	let avgList=[];

	rating_list.map(user=>{

		user.data.map(movie=>{
			if(avgList.find(element=> element.m_id == movie.m_id)!= null){
				let index = avgList.findIndex(element=> element.m_id == movie.m_id);
				avgList[index].avg_rating+= movie.rating;
			  	avgList[index].count+= 1;
			}
			else {
				avgList.push({m_id:movie.m_id,avg_rating:movie.rating,count:1})
			}

		})
	});




	avgList.map(movie=>{
		movie.avg_rating = Math.floor(movie.avg_rating/movie.count);
		// delete movie.count;
	});	


	res.json(avgList);
});


module.exports = router;