const express = require("express");
const router = express.Router();


router.post("/userMovie",(req,res)=>{
	const data_json = {data:[
		{m_id:1, name:"Movie 1",rating:1,des:"Lorem Ipsum is simply dummy text of the"},
		{m_id:2, name:"Movie 2",rating:2,des:"Lorem Ipsum is simply dummy text of the"},
		{m_id:3, name:"Movie 3",rating:3,des:"Lorem Ipsum is simply dummy text of the"},
		{m_id:4, name:"Movie 4",rating:4,des:"Lorem Ipsum is simply dummy text of the"},
		{m_id:5, name:"Movie 5",rating:5,des:"Lorem Ipsum is simply dummy text of the"}
	]};

	
	const data= req.body.data;
	let list;
	let movie_list=[];

	data.map(user_movie=> {
	
	list=data_json.data.filter(item=> item.m_id == user_movie.m_id);
	list[0].rating=user_movie.rating;
	movie_list.push(list[0]); 

	});

	data_json2= {u_name:req.body.u_name,data:movie_list};



	res.json(data_json2);
});

module.exports = router;