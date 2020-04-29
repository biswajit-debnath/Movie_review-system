const express = require("express");
const router = express.Router();

router.post("/userMovie",(req,res)=>{
	
	let u_name = req.body.u_name;
	const movies = [{u_name:"Biswajit",data:[
					{m_id:1, rating:3},
					{m_id:3, rating:5},
					{m_id:5, rating:2}
		]},
		{u_name:"Tikla",data:[
					{m_id:1, rating:3},
					{m_id:2, rating:5},
					{m_id:3, rating:1},
					{m_id:4, rating:5},
					{m_id:5, rating:4}
		]}
		];

		let rating_list;
		rating_list = movies.filter(user=> user.u_name == u_name);
		rating_list = rating_list[0]; 
		// rating_list = JSON.stringify(rating_list);
		// console.log(rating_list.data);

		res.json(rating_list);


});

module.exports = router;