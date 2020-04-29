const express= require("express");
const app = express();
const bodyParser = require("body-parser");


const userMovie_route = require("./routes/userMovie"); 

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); 

PORT=4000;

app.use(userMovie_route);



app.get("/",(req,res)=>{
	
	res.send("You are in Rating Service");
});

app.get("/rating",(req,res)=>{
	console.log("Server2");
	obj= {"Movie":"This is working"};

	res.json(obj);
});


app.listen(PORT,()=> console.log("Rating service is running at:", PORT));
