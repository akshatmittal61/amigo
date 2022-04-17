import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
	AOS.init();
	return (
		<>
			<Navigation />
			<Home />
			<Footer />
		</>
	);
};

export default App;
