import React, { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";

const Logout = () => {
	const { setIsAuthenticated, setUser } = useContext(GlobalContext);
	useEffect(() => {
		setIsAuthenticated(false);
		localStorage.setItem("isAuthenticated", false);
		localStorage.setItem("token", null);
		localStorage.setItem("user", null);
		setUser(null);
	}, []);
	return <Navigate to="/login" />;
};
export default Logout;
