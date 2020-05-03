const express= require("express");
const app = express();
const bodyParser = require("body-parser");


const userMovie_route = require("./routes/userMovie"); 
const avgRating_route = require("./routes/avgRating");
const changeRating_route = require("./routes/changeRating"); 

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); 


PORT=4000;


global.movies = [{u_name:"Biswajit",data:[
					// {m_id:1, rating:3},
					// {m_id:3, rating:5},
					// {m_id:5, rating:2}
		]},
		{u_name:"Tikla",data:[
					
		]}
		];


app.use(userMovie_route);
app.use(avgRating_route);
app.use(changeRating_route);




app.get("/",(req,res)=>{
	
	res.send("You are in Rating Service");
});



app.listen(PORT,()=> console.log("Rating service is running at:", PORT));
