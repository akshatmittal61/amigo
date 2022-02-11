import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as Icon from "react-feather";
import frame from "../../images/herobg.jpg";
import "./home.css";

const Home = () => {
	const vh = window.innerHeight / 100;
	const t = 40 * vh;
	const [headerBgColor, setHeaderBgColor] = useState("rgba(159, 86, 46, 0)");
	const [headerCol, setHeaderCol] = useState("var(--tcolor)");
	window.addEventListener("scroll", () => {
		const h = t;
		if (window.scrollY < h) {
			const per = window.scrollY / h;
			setHeaderBgColor(`rgba(159, 86, 46, ${per})`);
			setHeaderCol("var(--tcolor)");
		} else {
			setHeaderBgColor("rgb(159, 86, 46)");
			setHeaderCol("var(--bgcolor)");
		}
	});
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const homeAboutCards = [
		{
			icon: <Icon.Smile />,
			title: "Simple and Intuitive",
			description:
				"Amigo features a minimalistic and clean design, letting you focus on what you feel and want to write.",
		},
		{
			icon: <Icon.Lock />,
			title: "Private and Secure",
			description:
				"Your data always remains secure. The journal is encrypted with a password and stores in cloud.",
		},
		{
			icon: <Icon.Gift />,
			title: "Completely free and open source",
			description: (
				<>
					The app is free and open source and it\'s code can always be
					found on github
					<a href="https://github.com/akshatmittal61/amigo">
						<Icon.GitHub />
						GitHub
					</a>
				</>
			),
		},
	];

	return (
		<div className="home">
			<div
				className="home-hero"
				style={{
					backgroundImage: `url(${frame})`,
				}}
			>
				<Header
					style={{
						backgroundColor: headerBgColor,
						color: headerCol,
						boxShadow:
							window.scrollY > t ? "var(--shadow-3d)" : "none",
					}}
				/>
				<div className="home-hero-logo" data-aos="fade-up">
					<div className="home-hero-logo-brand">Amigo</div>
					<div className="home-hero-logo-subtitle">
						All in one platform for your daily diary and blogs
					</div>
				</div>
			</div>
			<div className="home-about">
				<div className="home-about-section">
					<div className="row">
						{homeAboutCards.map((card, index) => (
							<div
								className="col-lg-33 col-md-50 col-sm-100"
								key={index}
							>
								<div className="home-about-card">
									<div className="home-about-card-icon">
										{card.icon}
									</div>
									<div className="home-about-card-content">
										<h3>{card.title}</h3>
										<p>{card.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div
				className="home-add"
				style={{
					backgroundImage: `url(${frame})`,
				}}
			></div>
		</div>
	);
};

export default Home;
