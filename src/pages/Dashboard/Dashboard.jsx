import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { Home } from "react-feather";
import Main from "../../components/Main/Main";
import Diaries from "../../diaries";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

const Dashboard = () => {
	const [diaries, setDiaries] = useState([...Diaries]);
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	return (
		<Main>
			<section className="dashboard">
				<Header icon={<Home />} />
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
