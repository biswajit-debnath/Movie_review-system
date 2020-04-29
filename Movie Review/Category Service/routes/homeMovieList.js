const express = require("express");
const router = express.Router();


router.get("/movieItem",(req,res)=>{

	let data = {data:[
			{name:"Movie 1",id:"1",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 2",id:"2",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 3",id:"3",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 4",id:"4",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 5",id:"5",des:"Lorem Ipsum is simply dummy text of the"}
		]};

	res.json(data);

});

module.exports = router;