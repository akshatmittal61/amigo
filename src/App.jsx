import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";

const App = () => {
	AOS.init();
	return (
		<>
			<Home />
		</>
	);
};

export default App;
