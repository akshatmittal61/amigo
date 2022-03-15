import React, { useContext } from "react";
import * as Icon from "react-feather";
import GlobalContext from "../../Context/GlobalContext";
import "./sidebar.css";

const Sidebar = () => {
	const { setOpenSideBar } = useContext(GlobalContext);
	return (
		<section className="sidebar-container">
			<aside className="sidebar" data-aos="fade-right">
				<div className="sidebar-top">
					<button onClick={() => setOpenSideBar(false)}>
						<Icon.X />
					</button>
				</div>
				<div className="sidebar-body"></div>
			</aside>
		</section>
	);
};

export default Sidebar;
