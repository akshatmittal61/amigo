import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login";
import GlobalContext from "./Context/GlobalContext";

const App = () => {
	AOS.init();
	const { setOpenNav } = useContext(GlobalContext);
	const location = useLocation();
	useEffect(() => {
		setOpenNav(false);
	}, [location.pathname, setOpenNav]);
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			{location.pathname !== "/login" &&
				location.pathname !== "/register" && <Footer />}
		</>
	);
};

export default App;
