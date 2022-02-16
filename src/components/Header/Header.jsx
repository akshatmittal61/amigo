import React from "react";
import "./header.css";
import * as Icon from "react-feather";

const Header = ({ style }) => {
	return (
		<header className="header" style={style}>
			<div className="header-left">
				<button>
					<Icon.BarChart />
				</button>
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
