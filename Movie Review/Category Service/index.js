
const express= require("express");
const app = express();
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


PORT=3000;



app.get("/", async (req,res)=>{

	const auth_token = req.cookies.auth_token;
 	console.log(auth_token);

	const body = { U_id: 1 };
try{ 
	fetch('http://127.0.0.1/rating', {
  			 headers: {
			    'Cookie': 'auth_token='+auth_token+''
  			}
  		})
	    .then(res => res.json())
	    .then(json => {
	    	res.json(json);
	    });
}catch(err){
	console.log(err);
}
	// console.log("/");
	// res.json({obj:"Hii"});
});

app.get("/test",(req,res)=>{
	console.log("Working test");
	res.json({"Data":"Secured test"});
});

app.get("/test2",(req,res)=>{
	console.log("Working test2");
	res.json({"Data":"Secured test2"});
});


app.get("/err",(req,res)=>{

	console.log("/err");
	res.json({Data:"Errs"});
});



app.listen(PORT,()=> console.log("Server is listening at Port:", PORT));