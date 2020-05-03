const jwt = require("jsonwebtoken");

module.exports = function(req,res) {

	// const auth_token = req.cookies.auth_token;
	const header = req.headers['authorization'];
	
	 // console.log("Token_ver",auth_token);
	
	try {
		const bearer = header.split(' ');
		const auth_token = bearer[1];
		verified = jwt.verify(auth_token,'abcdefg');
		req.user = verified;
		return 200;
	} catch (err) {
		return 401;
	}


};