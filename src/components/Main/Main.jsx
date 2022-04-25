import React, { useEffect } from "react";
import { ArrowLeftCircle } from "react-feather";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./main.css";

const Main = ({
	children,
	cover = {
		image: "https://www.transparenttextures.com/patterns/food.png",
		color: "#4e8bd2",
	},
}) => {
	const navigate = useNavigate();
	const body = document.querySelector("body");
	useEffect(() => {
		body.style.backgroundColor = cover.color;
		body.style.backgroundImage = `url(${cover.image})`;
		return () => {
			body.style.backgroundColor = "var(--bgcolor)";
			body.style.backgroundImage = `none`;
		};
	}, []);

	return (
		<main className="main">
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
		</main>
	);
};

export default Main;
