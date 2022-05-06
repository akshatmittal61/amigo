import React, { useContext, useEffect } from "react";
import { Airplay, Edit, Home, Info, LogIn, LogOut } from "react-feather";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import "./navigation.css";

const Navigation = () => {
	const { openNav, setOpenNav, isAuthenticated } = useContext(GlobalContext);
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
	const navLinks = [
		{
			icon: <Home />,
			link: "/",
			title: "Home",
		},
		{
			icon: <Airplay />,
			link: "/dashboard",
			title: "Dashboard",
		},
		{
			icon: <Edit />,
			link: "/write",
			title: "Write Diary",
		},
		{
			icon: isAuthenticated ? <LogOut /> : <LogIn />,
			link: isAuthenticated ? "/logout" : "/login",
			title: isAuthenticated ? "Logout" : "Login",
		},
	];
	return (
		<div className={`nav ${openNav && "nav-open"}`}>
			<button className="nav-label" onClick={() => setOpenNav(!openNav)}>
				<span className="nav-label__line"></span>
			</button>
			<nav
				className="nav-container"
				data-aos="fade-left"
				style={{
					transform: openNav ? "none" : "translateX(100%)",
				}}
			>
				<ul className="nav-ul">
					{navLinks.map((navLink, index) => (
						<li className="nav-li" key={index}>
							<Link to={navLink.link}>
								<span className="nav-li__icon">
									{navLink.icon}
								</span>
								<span className="nav-li__title">
									{navLink.title}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className="nav-cover" onClick={() => setOpenNav(false)}></div>
		</div>
	);
};

export default Navigation;
