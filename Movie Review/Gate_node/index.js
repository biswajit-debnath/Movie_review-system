const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");
const cors = require('cors');

//including modules and routes
const auth_route = require("./routes/authentication");
const userMovie_route = require("./routes/userMovie");
const movieItem_route = require("./routes/movieItem")
const changeRating_route = require("./routes/changeRating"); 

const token_verify = require("./My_modules/token_verify");

PORT=5001;
const app = express();

//body parser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());


//Routes
app.use(auth_route);
app.use(userMovie_route);
app.use(movieItem_route);
app.use(changeRating_route);





app.get("/",(req,res)=>{ 

	// res.redirect("http://127.0.0.1:3000/test")

	// const auth_token = req.cookies.auth_token;
 // 	console.log(auth_token);

	// const body = { U_id: 1 };
	// try{ 
	// 	fetch('http://127.0.0.1/rating')
	// 	    .then(res => res.json())
	// 	    .then(json => {
	// 	    	res.json(json);
	// 	    });
	// }catch(err){
	// 	console.log(err);
	// }

	res.send("You are in API Gateway")
});


// app.post("/login",(req,res)=>{
// 	console.log("gate_Auth");

	// try{ 
	// fetch('http://localhost:5000/login', {
	// 		 method: 'post',
	// 		 body: JSON.stringify(req.body),
 //  			 headers: {
	// 		    'Content-Type': 'application/json'
 //  			}
 //  		})
	// 	.then(res_body=> res_body.json())
	//     .then(response => res.json(response));
	// 	}catch(err){
	// 		console.log(err);
	// }
	
		
// });



// app.get("/auth",(req,res)=>{
// 	console.log("In Auth");

// 	const auth_token = req.cookies.auth_token;
// 	 console.log(auth_token);
// 	if (!auth_token) {
// 		res.status(401).end();
// 	}
// 	else {
// 		try {
// 			verified = jwt.verify(auth_token,'abcdefg');
// 			console.log(verified);
// 			req.user = verified;
// 			res.status(200).end();
// 		} catch (err) {
// 			res.status(401).end();
// 		}
// 	}

	
// });












app.listen(PORT,()=>console.log("Gateway Server is running at : ",PORT));