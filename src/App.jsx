import React, { useEffect, useContext } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login";
import GlobalContext from "./Context/GlobalContext";
import Register from "./pages/Register/Register";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Logout from "./components/Logout";
import Diary from "./pages/Diary/Diary";
import Write from "./pages/Write/Write";

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
				<Route path="/register" element={<Register />} />
				<Route
					path="/dashboard"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				/>
				<Route
					path="/diary/:id"
					element={
						<PrivateRoute>
							<Diary />
						</PrivateRoute>
					}
				/>
				<Route
					path="/write"
					element={
						<PrivateRoute>
							<Write />
						</PrivateRoute>
					}
				/>
				<Route
					path="/logout"
					element={
						<PrivateRoute>
							<Logout />
						</PrivateRoute>
					}
				/>
			</Routes>
			{location.pathname !== "/login" &&
				location.pathname !== "/register" && <Footer />}
		</>
	);
};

export default App;
