const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {

	// const auth_token = req.cookies.auth_token;
	const header = req.headers['authorization'];
	
	 // console.log("Token_ver",auth_token);
	if (!header) {
		return res.json({status:401}).end();
	}
	else {
		try {
			const bearer = header.split(' ');
    		const auth_token = bearer[1];
			verified = jwt.verify(auth_token,'abcdefg');
			req.user = verified;
			next();
		} catch (err) {
			return res.json({status:401}).end();
		}
	}

};