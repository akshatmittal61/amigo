import React from "react";
import "./header.css";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

const Header = ({ style }) => {
	return (
		<header className="header" style={style}>
			<div className="header-left">
				<Link to="/" style={{ display: "none" }}>
					<div className="header-left-brand">Amigo</div>
				</Link>
			</div>
			<div className="header-right">
				<nav className="header-right-nav">
					<ul className="header-right-nav-ul">
						<li className="header-right-nav-li">
							<a href="/settings">
								<Icon.User />
								Profile
							</a>
						</li>
						<li className="header-right-nav-li">
							<a href="/settings">
								<Icon.Settings />
								Settings
							</a>
						</li>
						<li className="header-right-nav-li">
							<a href="/settings">
								<Icon.LogOut />
								Log Out
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
