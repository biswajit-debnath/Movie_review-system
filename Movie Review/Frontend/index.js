const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

PORT = 8080;


app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/home.html");
});

app.get("/login",(req,res)=>{
	res.sendFile(__dirname+"/login.html");
});


app.post("/login",(req,res)=>{
	
	try{ 
		fetch('http://localhost:5001/login', {
				 method: 'post',
				 body: JSON.stringify(req.body),
	  			 headers: {
				    'Content-Type': 'application/json'
	  			}
	  		}).then(res_body=> res_body.json())
		    .then(response =>{
		    	if(response.status == 200){
		    		console.log(response);
		    		res.cookie("auth_token",response.auth_token).redirect("/userMovie");
		    	}
		    	else res.redirect("/login?valid=none");
		    });
		}catch(err){
		console.log(err);
	}
		
});


app.get("/userMovie",(req,res)=>{
	res.sendFile(__dirname+"/userMovie.html");
});

app.get("/logout",(req,res)=> res.clearCookie("auth_token").redirect("/"));












app.listen(PORT,()=> console.log("Frontend service running at:",PORT));

