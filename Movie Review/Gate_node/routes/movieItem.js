const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");


router.get("/movieItem",(req,res)=>{
	try{ 
	fetch('http://localhost:3000/movieItem')
		.then(res_body=> res_body.json())
	    .then(response => res.json(response));
		}catch(err){
			console.log(err);
	}
});


module.exports = router;