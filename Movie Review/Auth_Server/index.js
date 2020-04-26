const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");


app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


//Temporary data
let name1,name2,hass_pass1,hass_pass2;
async function temp_data(){
name1="Biswajit";
const pass1="123";
name2="Tikla";
const pass2="1234";
let salt =await bcrypt.genSalt(10);
hass_pass1 =await bcrypt.hash(pass1, salt);
hass_pass2 =await bcrypt.hash(pass2, salt);
}
temp_data();


const PORT= 5000;


//Checking endpoint
app.get("/",(req,res)=> res.json({"Location": "You are in the Auth server"}));


//Login page end point
app.get("/login",(req,res)=> {

	res.sendFile( __dirname + "/login.html");
});


//Login handler
app.post("/login",async (req,res)=> {
	const user = req.body.name;
	if (user == name1 || user == name2 ) {
		const pass = user == name1 ? hass_pass1 : hass_pass2;
		let password = req.body.password;
		
		let ValidPass =await bcrypt.compare(password, pass);
		if (!ValidPass) res.json({status:400}).end();
		else {
		  let auth_token = jwt.sign(
		    { name: req.body.name },
		    'abcdefg'
		  );
		  // res.cookie("auth_token", auth_token)
		  // console.log(auth_token);
		  res.json({auth_token:auth_token,status:200}).end();
		}
	} else {
		res.json({status:400}).end();
	}
	
});








app.listen(PORT,()=> console.log("Auth service is listening at Port:", PORT));