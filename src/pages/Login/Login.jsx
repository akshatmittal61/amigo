import React, { useState, useContext } from "react";
import { ArrowLeftCircle, AtSign, Key } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import GlobalContext from "../../Context/GlobalContext";
import "./login.css";

const Login = () => {
	const navigate = useNavigate();
	const { setIsAuthenticated } = useContext(GlobalContext);
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		setUser({
			username: "",
			password: "",
		});
		setIsAuthenticated(true);
	};
	return (
		<section className="login">
			<Button
				text={
					<>
						<ArrowLeftCircle /> Go Back
					</>
				}
				onClick={() => navigate(-1)}
				className="login-back"
			/>
			<div className="login-content">
				<div className="login-head">Welcome Back...</div>
				<div className="login-box">
					<form className="login-form" onSubmit={handleSubmit}>
						<div className="login-form-group">
							<label>
								<AtSign />
							</label>
							<input
								type="text"
								name="username"
								placeholder="Username"
								value={user.username}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="login-form-group">
							<label>
								<Key />
							</label>
							<input
								type="password"
								name="password"
								placeholder="Password"
								value={user.password}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="login-form-group">
							<Button text="Login" type="submit" />
						</div>
					</form>
					<div className="login-foot">
						<span>Don't Have an account yet? </span>
						<Link to="/register">Sign Up</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
