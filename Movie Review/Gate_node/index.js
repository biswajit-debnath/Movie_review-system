const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

PORT=5001;
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));




app.get("/",(req,res)=>{ 

	// res.redirect("http://127.0.0.1:3000/test")

	// const auth_token = req.cookies.auth_token;
 // 	console.log(auth_token);

	// const body = { U_id: 1 };
	try{ 
		fetch('http://127.0.0.1/rating')
		    .then(res => res.json())
		    .then(json => {
		    	res.json(json);
		    });
	}catch(err){
		console.log(err);
	}
});

app.post("/login",(req,res)=>{

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






















app.listen(PORT,()=>console.log("Gateway Server is running at : ",PORT));