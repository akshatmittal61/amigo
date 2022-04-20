import React, { useState } from "react";
import { ArrowLeftCircle, AtSign, Key, Lock, Mail, User } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./register.css";

const Register = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		fname: "",
		lname: "",
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
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
	};
	return (
		<div className="register">
			<Button
				text={
					<>
						<ArrowLeftCircle /> Go Back
					</>
				}
				onClick={() => navigate(-1)}
				className="login-back"
			/>
			<div className="register-content">
				<div className="register-head">Sign Up ...</div>
				<div className="register-box">
					<form className="register-form" onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-lg-50 col-md-50 col-sm-100">
								<div className="register-form-group">
									<label>
										<User />
									</label>
									<input
										type="text"
										name="fname"
										placeholder="First Name"
										value={user.fname}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="col-lg-50 col-md-50 col-sm-100">
								<div className="register-form-group">
									<label>
										<User />
									</label>
									<input
										type="text"
										name="lname"
										placeholder="Last Name"
										value={user.lname}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="col-lg-50 col-md-50 col-sm-100">
								<div className="register-form-group">
									<label>
										<Mail />
									</label>
									<input
										type="email"
										name="email"
										placeholder="E Mail"
										value={user.email}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="col-lg-50 col-md-50 col-sm-100">
								<div className="register-form-group">
									<label>
										<AtSign />
									</label>
									<input
										type="text"
										name="username"
										placeholder="Username"
										value={user.username}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="col-lg-50 col-md-50 col-sm-100">
								<div className="register-form-group">
									<label>
										<Key />
									</label>
									<input
										type="password"
										name="password"
										placeholder="Password"
										value={user.password}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="col-lg-50 col-md-50 col-sm-100">
								<div className="register-form-group">
									<label>
										<Lock />
									</label>
									<input
										type="password"
										name="confirmPassword"
										placeholder="Confirm Password"
										value={user.confirmPassword}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="col-lg-100 col-md-100 col-sm-100">
								<Button text="Register" type="submit" />
							</div>
						</div>
					</form>
					<div className="register-foot">
						<span>Already have an account? </span>
						<Link to="/login">Log In</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
