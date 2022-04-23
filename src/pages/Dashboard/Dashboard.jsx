import React, { useState, useEffect, useContext } from "react";
import "./dashboard.css";
import { Home } from "react-feather";
import { useLocation } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import Main from "../../components/Main/Main";
import Diaries from "../../diaries";
import Card from "../../components/Card/Card";

const Dashboard = () => {
	const { user } = useContext(GlobalContext);
	const location = useLocation();
	const [diaries, setDiaries] = useState([...Diaries]);
	useEffect(() => {
		window.scroll(0,0);
	}, []);
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
				<div className="dashboard-body">
					<div className="row">
						{diaries.map((diary, index) => (
							<div
								className="col-lg-33 col-md-100 col-sm-100"
								key={index}
							>
								<Card card={diary} />
							</div>
						))}
					</div>
				</div>
			</section>
		</Main>
	);
};

export default Dashboard;
