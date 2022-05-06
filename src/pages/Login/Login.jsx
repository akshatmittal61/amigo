import React, { useState, useEffect, useContext } from "react";
import { ArrowLeftCircle, AtSign, Key } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import SnackBar from "../../components/SnackBar/SnackBar";
import GlobalContext from "../../Context/GlobalContext";
import "./login.css";

const Login = () => {
	const navigate = useNavigate();
	const {
		axiosInstance,
		isAuthenticated,
		setIsAuthenticated,
		setIsLoading,
		setUser,
	} = useContext(GlobalContext);
	const [loginUser, setLoginUser] = useState({
		username: "",
		password: "",
	});
	const [snack, setSnack] = useState({
		text: "Registered successfuly, create your profile now",
		bgColor: "var(--green)",
		color: "var(--white)",
	});
	const [open, setOpen] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginUser({
			...loginUser,
			[name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const { password, username } = loginUser;
			const response = await axiosInstance.post("/api/auth/login", {
				password,
				username,
			});
			setSnack({
				text: response.data.message,
				bgColor: "var(--green)",
				color: "var(--white)",
			});
			setOpen(true);
			setTimeout(() => {
				setOpen(false);
			}, 5000);
			setLoginUser({
				username: "",
				password: "",
			});
			setIsAuthenticated(true);
			console.log(JSON.stringify(response.data.user));
			localStorage.setItem("isAuthenticated", true);
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("user", JSON.stringify(response.data.user));
			setUser(response.data.user);
			setIsLoading(false);
		} catch (error) {
			setSnack({
				text: error.response.data.message,
				bgColor: "var(--red)",
				color: "var(--white)",
			});
			setOpen(true);
			setTimeout(() => {
				setOpen(false);
			}, 5000);
			setIsLoading(false);
		}
	};
	useEffect(() => {
		if (isAuthenticated) navigate("/dashboard");
	}, [isAuthenticated]);

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
								aria-details="Username"
								value={loginUser.username}
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
								aria-details="Password"
								value={loginUser.password}
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
			{open && (
				<SnackBar
					text={snack.text}
					bgColor={snack.bgColor}
					color={snack.color}
					close={() => setOpen(false)}
				/>
			)}
		</section>
	);
};

export default Login;
