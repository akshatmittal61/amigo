import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import GlobalContext from "./Context/GlobalContext";

const App = () => {
	AOS.init();
	const location = useLocation();
	const { openSideBar } = useContext(GlobalContext);
	return (
		<>
			{location.pathname !== "/" && <Header />}
			{openSideBar && <Sidebar />}
			<main>
				<Home />
			</main>
			<Footer />
		</>
	);
};

export default App;
