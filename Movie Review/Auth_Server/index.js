const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

//data
const user_data = require('./user_data');


app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// //Temporary data
// let name1,name2,hass_pass1,hass_pass2;
// async function temp_data(){
// name1="Biswajit";
// const pass1="123";
// name2="Tikla";
// const pass2="1234";
// let salt =await bcrypt.genSalt(10);
// hass_pass1 =await bcrypt.hash(pass1, salt);
// hass_pass2 =await bcrypt.hash(pass2, salt);
// }
// temp_data();


const PORT= 5000;


//Checking endpoint
app.get("/",(req,res)=> res.json({"Location": "You are in the Auth server"}));


//Login page end point
app.get("/login",(req,res)=> {

	res.sendFile( __dirname + "/login.html");
});


//Login handler
app.post("/login",async (req,res)=> {
	let { name,password }=req.body;


	
	let u_data = JSON.parse(JSON.stringify(user_data));
	let found_user = u_data.data.find(user=> user.name == name);
	console.log(found_user);
	if(found_user) {
		//Compare password
		let ValidPass =await bcrypt.compare(password, found_user.hass_password);
		if (!ValidPass) res.json({status:400}).end();
		else {
	  		let auth_token = jwt.sign(
	    	{ name: name },
	    	'abcdefg');
		  // res.cookie("auth_token", auth_token)
		  // console.log(auth_token);
		  res.json({auth_token:auth_token,status:200,u_name:name}).end();
		}
	}
	else res.json({status:401,err:"No such user found"}).end()

	
});



app.post("/signUp",async(req,res)=>{
	console.log("AuthServer_sign",req.body);

	let { name,password }=req.body;
	// password = parseInt(password);

	//Encrypting password
	let salt =await bcrypt.genSalt(10);
	hass_password =await bcrypt.hash(password, salt);

	let u_data = JSON.parse(JSON.stringify(user_data));
	let found_user = u_data.data.find(user=> user.name == name);
	if(found_user) res.json({status:401,err:"User Already Existed"});

	else {
		user_data.data.push({name,hass_password});
		console.log(user_data);
		res.json({status:200});
	}

});








app.listen(PORT,()=> console.log("Auth service is listening at Port:", PORT));