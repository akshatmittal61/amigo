import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import gm from "../../images/Gmail.svg";
import ld from "../../images/LinkedIn.svg";
import emailjs from "emailjs-com";

const Footer = () => {
	const [user, setUser] = useState({
		title: "",
		email: "",
		message: "",
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
		setUser({
			name: "",
			email: "",
			message: "",
		});
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE,
				process.env.REACT_APP_TEMPLATE,
				e.target,
				process.env.REACT_APP_USER
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="footer-top-left"></div>
				<div className="footer-top-right">
					<div className="footer-top-right-up">
						<h2>Contact the Developer</h2>
						<div>
							<a
								href="https://akshatmittal61.github.io/akshatmittal61/"
								title="Website"
							>
								<img
									src="https://akshatmittal61.github.io/akshatmittal61/static/media/favicon.f216be050314e2836b31.png"
									alt="Akshat Mittal"
								/>
							</a>
							<a
								href="mailto:akshatmittal2506@gmail.com"
								title="email"
							>
								<img src={gm} alt="GMail" />
							</a>
							<a
								href="https://www.linkedin.com/in/akshatmitta61/"
								title="LinkedIn"
							>
								<img src={ld} alt="LinkedIn" />
							</a>
						</div>
					</div>
					<div className="footer-top-right-down">
						<h2>Send a Message</h2>
						<form className="contact-form" onSubmit={handleSubmit}>
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								value={user.name}
								onChange={handleChange}
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Your Email"
								value={user.email}
								onChange={handleChange}
							/>
							<textarea
								name="message"
								placeholder="Your message here"
								value={user.message}
								onChange={handleChange}
								required
								rows={5}
							></textarea>
							<button
								type={"submit"}
								style={{ color: "var(--bgcolor)" }}
							>
								Submit Your message
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<Link to="/">Copyright &copy; 2022 Amigo</Link>
			</div>
		</footer>
	);
};

export default Footer;
