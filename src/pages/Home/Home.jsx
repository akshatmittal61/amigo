import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import frame from "../../images/herobg.jpg";
import "./home.css";

const Home = () => {
	const vh = window.innerHeight / 100;
	const [headerBgColor, setHeaderBgColor] = useState("rgba(159, 86, 46, 0)");
	const [headerCol, setHeaderCol] = useState("var(--tcolor)");
	window.addEventListener("scroll", () => {
		const h = 30 * vh;
		if (window.scrollY < h) {
			const per = window.scrollY / h;
			setHeaderBgColor(`rgba(159, 86, 46, ${per})`);
			setHeaderCol("var(--tcolor)");
		} else {
			setHeaderBgColor("rgba(159, 86, 46, 1)");
			setHeaderCol("var(--bgcolor)");
		}
	});

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
					}}
				/>
				<div className="home-hero-logo" data-aos="fade-up">
					<div className="home-hero-logo-brand">Amigo</div>
					<div className="home-hero-logo-subtitle">
						All in one platform for your daily diary and blogs
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
