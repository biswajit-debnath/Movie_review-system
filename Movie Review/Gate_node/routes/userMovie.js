const express = require("express");
router = express.Router();
const fetch = require("node-fetch");
const token_verify = require("../My_modules/token_verify");



router.post("/userMovie",token_verify,(req,res)=>{
	console.log("gate");
	try{ 
	fetch('http://localhost:3000/userMovie', {
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