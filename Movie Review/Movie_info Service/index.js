const express= require("express");
const app = express();
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");


const publicMovies_data = require("./data");

const userMovie_route = require("./routes/userMovie")
const homeMovieList_route = require("./routes/homeMovieList")

app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use(userMovie_route);
app.use(homeMovieList_route);
PORT=3000;



app.get("/", async (req,res)=>{

// 	const auth_token = req.cookies.auth_token;
//  	console.log(auth_token);

// 	const body = { U_id: 1 };
// try{ 
// 	fetch('http://127.0.0.1/rating', {
//   			 headers: {
// 			    'Cookie': 'auth_token='+auth_token+''
//   			}
//   		})
// 	    .then(res => res.json())
// 	    .then(json => {
// 	    	res.json(json);
// 	    });
// }catch(err){
// 	console.log(err);
// }
	// console.log("/");
	// res.json({obj:"Hii"});

	

	res.send("You are in Movie_info service");
});


app.get("/err",(req,res)=>{

	console.log("/err");
	res.json({Data:"Errs"});
});



app.listen(PORT,()=> console.log("Movie_info service is listening at:", PORT));