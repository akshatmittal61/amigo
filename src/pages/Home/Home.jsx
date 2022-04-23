import React, { useEffect } from "react";
import "./home.css";
import favicon from "../../images/favicon.svg";
import home_ss from "../../images/home_ss.png";
import { Gift, Lock, Smile } from "react-feather";

const Home = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	const homeAboutCards = [
		{
			icon: <Smile />,
			title: "Simple and Intuitive",
			description:
				"Amigo features a minimalistic and clean design, letting you focus on what you feel and want to write.",
			layout: [33, 50, 100],
		},
		{
			icon: <Lock />,
			title: "Private and Secure",
			description:
				"Your data always remains secure. The journal is encrypted with a password and stores in cloud.",
			layout: [33, 50, 100],
		},
		{
			icon: <Gift />,
			title: "Completely free and open source",
			description: (
				<>
					The app is free and open source and it's code can always be
					found on
					<a href="https://github.com/akshatmittal61/amigo">
						{" "}
						GitHub
					</a>
				</>
			),
			layout: [33, 100, 100],
		},
	];
	return (
		<section className="home">
			<div className="home-hero">
				<div className="home-hero-image">
					<img src={favicon} alt="Amigo" />
				</div>
				<div className="home-hero-title">
					<span>Amigo</span>
				</div>
				<div className="home-hero-subtitle">
					<span>A safe place for all your thoughts</span>
				</div>
			</div>
			<div className="home-ss">
				<img src={home_ss} alt="Home Page" />
			</div>
			<div className="home-about">
				<div className="row">
					{homeAboutCards.map((card, index) => (
						<div
							className={`col-lg-${card.layout[0]} col-md-${card.layout[1]} col-sm-${card.layout[2]}`}
							key={index}
						>
							<div className="home-about-card">
								<div className="home-about-card-icon">
									{card.icon}
								</div>
								<div className="home-about-card-content">
									<span className="home-about-card-content__title">
										{card.title}
									</span>
									<span className="home-about-card-content__description">
										{card.description}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Home;
