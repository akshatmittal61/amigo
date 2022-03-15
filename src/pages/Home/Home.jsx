import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as Icon from "react-feather";
import frame from "../../images/herobg.jpg";
import diaryImg from "../../images/diary-1.png";
import blogImg from "../../images/blog-1.png";
import "./home.css";

const Home = () => {
	const vh = window.innerHeight / 100;
	const t = 50 * vh;
	const [bgcolor, setBgcolor] = useState("rgba(159, 86, 46, 0)");
	const [color, setColor] = useState("var(--tcolor)");
	const [boxShadow, setBoxShadow] = useState("none");
	const [height, setHeight] = useState("13vh");
	window.addEventListener("scroll", () => {
		if (window.scrollY < t) {
			setBgcolor(`rgba(159, 86, 46, ${window.scrollY / t})`);
			setColor("var(--tcolor)");
			setBoxShadow("none");
			setHeight(`${13 - (window.scrollY / t) * 3}vh`);
		} else {
			setBgcolor("rgb(159, 86, 46)");
			setColor("var(--bgcolor)");
			setBoxShadow("var(--shadow-3d)");
			setHeight("10vh");
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
			layout: [33, 50, 100],
		},
		{
			icon: <Icon.Lock />,
			title: "Private and Secure",
			description:
				"Your data always remains secure. The journal is encrypted with a password and stores in cloud.",
			layout: [33, 50, 100],
		},
		{
			icon: <Icon.Gift />,
			title: "Completely free and open source",
			description: (
				<>
					The app is free and open source and it's code can always be
					found on github
					<a href="https://github.com/akshatmittal61/amigo">
						<Icon.GitHub />
						GitHub
					</a>
				</>
			),
			layout: [33, 100, 100]
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
						backgroundColor: bgcolor,
						color: color,
						boxShadow: boxShadow,
						height: height,
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
								className={`"col-lg-${card.layout[0]} col-md-${card.layout[1]} col-sm-${card.layout[2]}`}
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
			>
				<div className="row">
					<div className="col-lg-50 col-md-100 col-sm-100">
						<div className="home-add-box">
							<div className="home-add-icon">
								<img src={diaryImg} alt="Diary" />
							</div>
							<div className="home-add-content">
								<ul className="home-add-ul">
									<li>Free</li>
									<li>Encrypted security</li>
									<li>User friendly environment</li>
									<li>24*7 help</li>
								</ul>
								<button>
									<span>Add new Diary</span>
									<Icon.PlusCircle />
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg-50 col-md-100 col-sm-100">
						<div className="home-add-box">
							<div className="home-add-icon">
								<img src={blogImg} alt="Diary" />
							</div>
							<div className="home-add-content">
								<ul className="home-add-ul">
									<li>Free</li>
									<li>Encrypted security</li>
									<li>User friendly environment</li>
									<li>24*7 help</li>
								</ul>
								<button>
									<span>Add new Blog</span>
									<Icon.PlusCircle />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
