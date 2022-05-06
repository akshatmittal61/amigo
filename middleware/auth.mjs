import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
	const token = req.header("x-auth-token");
	console.log(req.headers);
	if (!token)
		return res
			.status(401)
			.json({ message: "No Token. Authorization denied" });
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded.user;
		next();
	} catch (err) {
		console.error(err);
		res.status(401).json({ message: "Token is not valid" });
	}
};

export default auth;
