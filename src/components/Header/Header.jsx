import React, { useContext } from "react";
import { Edit3, Home } from "react-feather";
import { Link, useLocation } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import "./header.css";

const Header = ({ icon = <Home /> }) => {
	const location = useLocation();
	const { user } = useContext(GlobalContext);
	return (
		<header className="header">
			<div className="header-nav">
				<div className="header-nav__icon">{icon}</div>
				<div className="header-nav__path">{location.pathname}</div>
			</div>
			<div className="header-right">
				{location.pathname !== "/write" && (
					<div className="header-write">
						<Link to="/write">
							<Edit3 />
						</Link>
					</div>
				)}
				<div className="header-user">
					<div className="header-user__img">
						<img src={user.avatar} alt={user.name} />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
