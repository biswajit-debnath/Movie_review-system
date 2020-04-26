const express = require("express");
const router = express.Router();


router.post("/userMovie",(req,res)=>{
	const data_json = {data:[
		{name:"Movie 1",rating:"1",des:"Lorem Ipsum is simply dummy text of the"},
		{name:"Movie 2",rating:"2",des:"Lorem Ipsum is simply dummy text of the"},
		{name:"Movie 3",rating:"3",des:"Lorem Ipsum is simply dummy text of the"},
		{name:"Movie 4",rating:"4",des:"Lorem Ipsum is simply dummy text of the"},
		{name:"Movie 5",rating:"5",des:"Lorem Ipsum is simply dummy text of the"}
	]};

	res.json(data_json);
});

module.exports = router;