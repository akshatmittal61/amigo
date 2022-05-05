import User from "../models/User.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
	const { fname, lname, email, username, password } = req.body;
	if (!fname || !lname || !email || !password || !username)
		return res.status(400).json({ message: "Invalid Data" });
	if (password.length < 6)
		return res.status(400).json({
			message: "Password should be more of 6 characters minimum",
		});
	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ message: "User already registered" });
		}
		user = new User({ fname, lname, email, password, username });
		user.password = await bcrypt.hash(password, 10);
		await user.save();
		const payload = {
			user: {
				id: user.id,
			},
		};
		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: 360000 },
			(err, token) => {
				if (err) throw err;
				return res
					.status(200)
					.json({ token, message: "User registered" });
			}
		);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server Error" });
	}
};

const login = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password)
		return res
			.status(400)
			.json({ message: "Username and Password are required" });
	try {
		let user = await User.findOne({ username });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
			return res.status(400).json({ message: "Invalid credentials" });
		const payload = {
			user: {
				id: user.id,
			},
		};
		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: 360000 },
			(err, token) => {
				if (err) throw err;
				res.status(200).json({ token, message: "Login successful" });
			}
		);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server Error" });
	}
};

export { register, login };
