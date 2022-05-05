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
	});
	const [user, setUser] = useState({
		name: "Akshat Mittal",
		email: "akshatmittal2506@gmail.com",
		username: "akshatmittal61",
		avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
		id: '12enln21e'
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
				user,
				setUser,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
