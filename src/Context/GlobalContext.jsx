import axios from "axios";
import { useState, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [openNav, setOpenNav] = useState(false);
	const isLocalAuthenticated = localStorage.getItem("isAuthenticated");
	const [isAuthenticated, setIsAuthenticated] = useState(
		JSON.parse(isLocalAuthenticated)
	);
	const [isLoading, setIsLoading] = useState(false);
	const axiosInstance = axios.create({
		baseURL: "http://localhost:5000/",
	});
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
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
