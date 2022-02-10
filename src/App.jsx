import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
	AOS.init();
	const location = useLocation();
	return (
		<>
			{location.pathname !== "/" && <Header />}
			<aside></aside>
			<main>
				<Home />
			</main>
			<footer></footer>
		</>
	);
};

export default App;
