import axios from "axios";
import { useState, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [openNav, setOpenNav] = useState(false);
	const isLocalAuthenticated = localStorage.getItem("isAuthenticated");
	const [isAuthenticated, setIsAuthenticated] = useState(
		JSON.parse(isLocalAuthenticated)
	);
	const [isLoading, setIsLoading] = useState(true);
	const axiosInstance = axios.create({
		baseURL: "http://localhost:4000/",
		headers: {
			"x-auth-token": localStorage.getItem("token"),
			"Content-Type": "application/json",
		},
	});
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
	return (
		<GlobalContext.Provider
			value={{
				openNav,
				setOpenNav,
				isLocalAuthenticated,
				isAuthenticated,
				setIsAuthenticated,
				isLoading,
				setIsLoading,
				axiosInstance,
				user,
				setUser,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
