const express = require("express");
const router = express.Router();

router.post("/userMovie",(req,res)=>{
	
	let u_name = req.body.u_name;
	//Temp logic
 
	let my_movies= JSON.parse(JSON.stringify(movies));
	//const movies varibale in index.js
	let rating_list;
	rating_list = my_movies.filter(user=> user.u_name == u_name);
	rating_list = rating_list[0]; 
	// rating_list = JSON.stringify(rating_list);
	// console.log(rating_list.data);

	res.json(rating_list);


});

module.exports = router;