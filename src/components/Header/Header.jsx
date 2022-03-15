import React, { useContext } from "react";
import "./header.css";
import * as Icon from "react-feather";
import GlobalContext from "../../Context/GlobalContext";

const Header = ({ style }) => {
	const { openSideBar, setOpenSideBar } = useContext(GlobalContext);
	return (
		<header className="header" style={style}>
			<div className="header-left">
				<button onClick={() => setOpenSideBar(!openSideBar)}>
					<Icon.BarChart />
				</button>
			</div>
			<div className="header-right">
				<nav className="header-right-nav">
					<ul className="header-right-nav-ul">
						<li className="header-right-nav-li">
							<a href="/profile">
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
							<a href="/logout">
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
