import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({
	text = "Click Me",
	size = "normal",
	containsLink = false,
	link = "#",
	containsHref = false,
	href = "#",
	className,
	style,
	...rest
}) => {
	let classes = "btn";
	if (size === "small") classes += " btn-sm";
	else if (size === "large") classes += " btn-lg";
	return (
		<>
			{containsLink ? (
				<Link to={link}>
					<button
						style={{
							...style,
						}}
						className={`${classes} ${className}`}
						{...rest}
					>
						{text}
					</button>
				</Link>
			) : containsHref ? (
				<a href={href}>
					<button
						style={{
							...style,
						}}
						className={`${classes} ${className}`}
						{...rest}
					>
						{text}
					</button>
				</a>
			) : (
				<button
					style={{
						...style,
					}}
					className={`${classes} ${className}`}
					{...rest}
				>
					{text}
				</button>
			)}
		</>
	);
};

export default Button;
