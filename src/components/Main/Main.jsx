import React from "react";
import { ArrowLeftCircle } from "react-feather";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./main.css";

const Main = ({ children }) => {
	const navigate = useNavigate();
	return (
		<div className="main">
			<div className="main-cover">
				<Button
					text={
						<>
							<ArrowLeftCircle /> Go Back
						</>
					}
					onClick={() => navigate(-1)}
					className="login-back"
				/>
			</div>
			<div className="main-container">{children}</div>
		</div>
	);
};

export default Main;
