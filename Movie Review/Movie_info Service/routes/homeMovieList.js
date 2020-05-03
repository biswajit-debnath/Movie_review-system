const express = require("express");
const router = express.Router();
const publicMovies_data = require("../data");

router.get("/publicMovies",(req,res)=>{
	 const data = JSON.parse(publicMovies_data);

	res.json(data);

});

module.exports = router;