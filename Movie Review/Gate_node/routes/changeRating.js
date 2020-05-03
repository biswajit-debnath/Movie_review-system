const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");


router.post("/changeRating",(req,res)=>{

	// response=token_verify(req);
	// if(response != 200) res.json({status:401});


	
	console.log("changeRating",req.body);
	try{ 
		fetch('http://localhost:4000/changeRating', {
		 method: 'PUT',
		 body: JSON.stringify(req.body),
			 headers: {
		    'Content-Type': 'application/json'
			}
	});
	}catch(err){
		console.log(err);
	}

});

module.exports = router;