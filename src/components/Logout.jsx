import React, { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";

const Logout = () => {
	const { setIsAuthenticated } = useContext(GlobalContext);
	useEffect(() => {
		setIsAuthenticated(false);
		localStorage.setItem("isAuthenticated", false);
	}, []);
	return <Navigate to="/login" />;
};
export default Logout;
