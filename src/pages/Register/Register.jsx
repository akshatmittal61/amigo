import React, { useContext, useState } from "react";
import {
	ArrowLeftCircle,
	AtSign,
	Camera,
	Key,
	Lock,
	Mail,
	User,
} from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import SnackBar from "../../components/SnackBar/SnackBar";
import GlobalContext from "../../Context/GlobalContext";
import "./register.css";

const Register = () => {
	const navigate = useNavigate();
	const { axiosInstance, setIsLoading } = useContext(GlobalContext);
	const [user, setUser] = useState({
		fname: "",
		lname: "",
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
		avatar: "",
	});
	const [snack, setSnack] = useState({
		text: "Registered successfuly, create your profile now",
		bgColor: "var(--green)",
		color: "var(--white)",
	});
	const [open, setOpen] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (user.password !== user.confirmPassword) {
			setUser({
				...user,
				confirmPassword: "",
			});
			setSnack({
				text: "Passwords do not match",
				bgColor: "var(--red)",
				color: "var(--white)",
			});
			setOpen(true);
			setTimeout(() => {
				setOpen(false);
			}, 5000);
		} else {
			try {
				setIsLoading(true);
				const { email, password, fname, lname, username, avatar } =
					user;
				const response = await axiosInstance.post(
					"/api/auth/register",
					{
						email,
						password,
						fname,
						lname,
						username,
						avatar,
					}
				);
				setSnack({
					text: response.data.message,
					bgColor: "var(--green)",
					color: "var(--white)",
				});
				setOpen(true);
				setTimeout(() => {
					setOpen(false);
				}, 5000);
				setUser({
					fname: "",
					lname: "",
					email: "",
					username: "",
					password: "",
					confirmPassword: "",
					avatar: "",
				});
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
		}
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
										aria-details="First Name"
										value={user.fname}
										onChange={handleChange}
										required
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
										aria-details="Last Name"
										value={user.lname}
										onChange={handleChange}
										required
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
										aria-details="E Mail"
										value={user.email}
										onChange={handleChange}
										required
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
										aria-details="Username"
										value={user.username}
										onChange={handleChange}
										required
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
										aria-details="Password"
										value={user.password}
										onChange={handleChange}
										required
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
										aria-details="Confirm Password"
										value={user.confirmPassword}
										onChange={handleChange}
										required
									/>
								</div>
							</div>
							<div className="col-lg-100 col-md-100 col-sm-100">
								<div className="register-form-group">
									<label>
										<Camera />
									</label>
									<input
										type="url"
										name="avatar"
										placeholder="Avatar"
										aria-details="Avatar"
										value={user.avatar}
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
			{open && (
				<SnackBar
					text={snack.text}
					bgColor={snack.bgColor}
					color={snack.color}
					close={() => setOpen(false)}
				/>
			)}
		</div>
	);
};

export default Register;
