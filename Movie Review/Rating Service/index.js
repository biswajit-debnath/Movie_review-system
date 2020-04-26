const express= require("express");
const app = express();
const bodyParser = require("body-parser");



app.use(bodyParser.json()); 

PORT=4000;



app.get("/",(req,res)=>{
	console.log("Server2");
	obj= {"Movie":"This is working"};

	res.json(obj);
});

app.get("/rating",(req,res)=>{
	console.log("Server2");
	obj= {"Movie":"This is working"};

	res.json(obj);
});


app.listen(PORT,()=> console.log("Server is listening at Port:", PORT));
