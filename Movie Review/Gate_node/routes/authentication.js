const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/login",(req,res)=>{
	console.log("gate_Auth");

	try{ 
	fetch('http://localhost:5000/login', {
			 method: 'post',
			 body: JSON.stringify(req.body),
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

