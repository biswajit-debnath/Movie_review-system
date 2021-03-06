const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

PORT = 8080;


let user = {};


app.get("/home",(req,res)=>{

	try{ 
		fetch('http://localhost:5001/movieItem')
			.then(res_body=> res_body.json())
		    .then(response =>{
		    		res.render("home",{response});
		    });
		}catch(err){
		console.log(err);
	}
});

app.get("/login",(req,res)=>{
	res.render("login");
});


app.post("/login",(req,res)=>{
	console.log("front_auth");
	
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
		    		// user["id"] = response.u_id;
		    		user["u_name"] = response.u_name;
		    		console.log(user);
		    		res.cookie("auth_token",response.auth_token).redirect("/home");
		    	}
		    	else res.redirect("/login?valid=none");
		    });
		}catch(err){
		console.log(err);
	}
		
});


app.get("/userMovie",(req,res)=>{
	// body= {id:1,name:"Biswajit"};
	const auth_token = req.cookies.auth_token;
	// console.log(auth_token);
	try{ 
		fetch('http://localhost:5001/userMovie', {
				 method: 'post',
				 body: JSON.stringify(user),
	  			 headers: {
				    'Content-Type': 'application/json',
				    'Cookie': 'auth_token='+auth_token+''
	  			}
	  		})
			.then(res_body=> res_body.json())
		    .then(response =>{
		    	if(response.status != 401){
		    		console.log(response);
		    		res.render("userMovie",{response});	
		    	}
		    	else res.redirect("/login?valid=not_allowed");
		    });
		}catch(err){
		console.log(err);
	}



});

app.get("/logout",(req,res)=> res.clearCookie("auth_token").redirect("/home"));












app.listen(PORT,()=> console.log("Frontend service running at:",PORT));

