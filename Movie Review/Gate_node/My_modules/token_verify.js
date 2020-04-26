const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {

	const auth_token = req.cookies.auth_token;
	 console.log(auth_token);
	if (!auth_token) {
		return res.json({status:401}).end();
	}
	else {
		try {
			verified = jwt.verify(auth_token,'abcdefg');
			req.user = verified;
			next();
		} catch (err) {
			return res.json({status:401}).end();
		}
	}

};