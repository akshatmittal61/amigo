import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
	AOS.init();
	return (
		<>
			<Home />
			<Footer />
		</>
	);
};

export default App;
