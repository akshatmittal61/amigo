import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import "./navigation.css";

const Navigation = () => {
	const { openNav, setOpenNav } = useContext(GlobalContext);
	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") setOpenNav(false);
		});
		return () => {
			document.removeEventListener("keydown", (e) => {
				if (e.key === "Escape") setOpenNav(false);
			});
		};
	}, [setOpenNav]);
	return (
		<>
			<label htmlFor="nav" className={`nav-btn ${openNav && "nav-open"}`}>
				<input
					type="checkbox"
					name="nav"
					id="nav"
					value={openNav}
					onChange={() => setOpenNav(!openNav)}
				/>
				<div className="nav-button">
					<span></span>
				</div>
			</label>
			<div className={`nav-container ${openNav && "nav-open"}`}>
				<nav className="nav">
					<ul className="nav-ul">
						<li className="nav-li">
							<Link to="/">
								<span className="material-icons">home</span>
								<span className="nav-span">Home</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navigation;
