import React, { useState, useEffect, useContext } from "react";
import "./dashboard.css";
import { Home } from "react-feather";
import Main from "../../components/Main/Main";
// import Diaries from "../../diaries";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import GlobalContext from "../../Context/GlobalContext";
import SnackBar from "../../components/SnackBar/SnackBar";

const Dashboard = () => {
	const { axiosInstance, token, setIsLoading } = useContext(GlobalContext);
	const [diaries, setDiaries] = useState([]);
	const [snack, setSnack] = useState({
		text: "Registered successfuly, create your profile now",
		bgColor: "var(--green)",
		color: "var(--white)",
	});
	const [open, setOpen] = useState(false);
	const getDiaries = async () => {
		setDiaries([]);
		try {
			const response = await axiosInstance("/api/diary/all");
			console.log(response);
			setDiaries([...response.data]);
		} catch (error) {
			setSnack({
				text: error.response.data.message,
				bgColor: "var(--red)",
				color: "var(--white)",
			});
			setOpen(true);
			setTimeout(() => {
				setOpen(false);
			}, 5000);
			setIsLoading(false);
		}
	};
	useEffect(() => {
		window.scroll(0, 0);
		getDiaries();
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
			{open && (
				<SnackBar
					text={snack.text}
					bgColor={snack.bgColor}
					color={snack.color}
					close={() => setOpen(false)}
				/>
			)}
		</Main>
	);
};

export default Dashboard;
