import React, { useContext } from "react";
import "./dashboard.css";
import { Home } from "react-feather";
import { useLocation } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import Main from "../../components/Main/Main";

const Dashboard = () => {
	const { user } = useContext(GlobalContext);
	const location = useLocation();
	return (
		<Main>
			<section className="dashboard">
				<div className="dashboard-head">
					<div className="dashboard-head-nav">
						<div className="dashboard-head-nav__icon">
							<Home />
						</div>
						<div className="dashboard-head-nav__path">
							{location.pathname}
						</div>
					</div>
					<div className="dashboard-head-user">
						<div className="dashboard-head-user__img">
							<img src={user.avatar} alt={user.name} />
						</div>
					</div>
				</div>
			</section>
		</Main>
	);
};

export default Dashboard;
